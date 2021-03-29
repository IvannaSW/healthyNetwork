import { all } from "redux-saga/effects";
import { postSaga } from "./post/sagas";
import { postsSaga } from "./posts/sagas";
import { tagsSaga } from "./tags/sagas";

export default function* rootSaga() {
  yield all([postsSaga(), tagsSaga(), postSaga()]);
}
