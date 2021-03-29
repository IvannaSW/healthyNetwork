import { call, put, takeEvery } from "redux-saga/effects";
import { PostsApi } from "../../services/api/postsAPI";
import { setPostData, setPostLoadingState } from "./actions";
import { PostActionTypes, LoadingState } from "./types";

export function* fetchPostDataRequest({ payload: postId }) {
  try {
    const data = yield call(PostsApi.fetchPostData, postId);
    yield put(setPostData(data[0]));
  } catch (error) {
    yield put(setPostLoadingState(LoadingState.ERROR));
  }
}

export function* postSaga() {
  yield takeEvery(PostActionTypes.FETCH_POST_DATA, fetchPostDataRequest);
}
