import {
  DocumentData,
  QuerySnapshot,
  collection,
  getDocs,
} from "firebase/firestore";
import { call, put, takeEvery } from "redux-saga/effects";

import { convertCollectionsSnapshotToMap, db } from ":app/firebase.utils";
import { Collection, CollectionName } from ":features/directory/types";

import { fetchCollections } from "./shop-slice";

export function* fetchCollectionsSaga(): Generator<
  DocumentData,
  void,
  unknown
> {
  try {
    const collectionRef = collection(db, "collections");
    const snapshot = yield getDocs(collectionRef);
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot as QuerySnapshot<DocumentData>
    );
    yield put(
      fetchCollections.fulfilled(
        collectionsMap as Record<CollectionName, Collection>
      )
    );
  } catch (e: any) {
    yield put(fetchCollections.rejected(e.message));
  }
}

export function* watchFetchCollections() {
  yield takeEvery(fetchCollections.pending, fetchCollectionsSaga);
}
