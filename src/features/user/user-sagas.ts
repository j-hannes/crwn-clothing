import {
  User,
  UserCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from ":app/firebase.utils";

import {
  EmailAndPassword,
  emailSignIn,
  googleSignIn,
  signIn,
} from "./user-slice";

function* getSnapshotFromUserAuth(
  userCredential: UserCredential
): Generator<any, void, unknown> {
  const { user } = userCredential as UserCredential;
  const userRef = yield call(createUserProfileDocument, user);
  const userSnapshot = (yield getDoc(
    userRef as DocumentReference<DocumentData>
  )) as DocumentSnapshot<DocumentData>;
  yield put(
    signIn.fulfilled({
      id: userSnapshot.id,
      ...(userSnapshot.data() as User),
    })
  );
}

function* signInWithEmail({
  payload: { email, password },
}: {
  payload: EmailAndPassword;
}): Generator<any, void, unknown> {
  try {
    const userCredential = yield signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    yield getSnapshotFromUserAuth(userCredential as UserCredential);
  } catch (error: any) {
    yield put(signIn.rejected(error.message));
  }
}

function* signInWithGoogle(): Generator<any, void, unknown> {
  try {
    const userCredential = yield signInWithPopup(auth, googleProvider);
    yield getSnapshotFromUserAuth(userCredential as UserCredential);
  } catch (error: any) {
    yield put(signIn.rejected(error.message));
  }
}

function* watchEmailSignIn() {
  yield takeLatest(emailSignIn.pending, signInWithEmail);
}

function* watchGoogleSignIn() {
  yield takeLatest(googleSignIn.pending, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(watchGoogleSignIn), call(watchEmailSignIn)]);
}
