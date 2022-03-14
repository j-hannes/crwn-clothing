import { all, call } from "redux-saga/effects";

import { watchFetchCollections } from ":features/shop/shop-sagas";

export function* rootSaga() {
  yield all([call(watchFetchCollections)]);
}
