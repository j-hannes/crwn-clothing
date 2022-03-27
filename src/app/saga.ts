import { all, call } from "redux-saga/effects";

import { shopSagas } from ":features/shop/shop-sagas";
import { userSagas } from ":features/user/user-sagas";

export function* rootSaga() {
  yield all([call(shopSagas), call(userSagas)]);
}
