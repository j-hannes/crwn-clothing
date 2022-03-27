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
  getCurrentUser,
  googleProvider,
} from ":app/firebase.utils";

import {
  EmailAndPassword,
  checkUserSession,
  emailSignIn,
  googleSignIn,
  signIn,
} from "./user-slice";

function* getSnapshotFromUserAuth(
  user: UserCredential["user"]
): Generator<any, void, unknown> {
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
    const { user } = (yield signInWithEmailAndPassword(
      auth,
      email,
      password
    )) as UserCredential;
    yield getSnapshotFromUserAuth(user as UserCredential["user"]);
  } catch (error: any) {
    yield put(signIn.rejected(error.message));
  }
}

function* signInWithGoogle(): Generator<any, void, unknown> {
  try {
    const { user } = (yield signInWithPopup(
      auth,
      googleProvider
    )) as UserCredential;
    yield getSnapshotFromUserAuth(user as UserCredential["user"]);
  } catch (error: any) {
    yield put(signIn.rejected(error.message));
  }
}

function* isUserAuthenticated(): Generator<any, void, unknown> {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth as UserCredential["user"]);
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

function* watchCheckUserSession() {
  yield takeLatest(checkUserSession, isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(watchGoogleSignIn),
    call(watchEmailSignIn),
    call(watchCheckUserSession),
  ]);
}
