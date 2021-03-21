import { call, put, takeLatest } from "redux-saga/effects";
import { PostsApi } from "../../services/api/postsAPI";
import { setPosts, setPostsLoadingState } from "./actions";
import { PostsActionTypes, LoadingState } from "./types";

export function* fetchPostsRequest() {
  try {
    const items = yield call(PostsApi.fetchPosts);
    yield put(setPosts(items));
  } catch (error) {
    yield put(setPostsLoadingState(LoadingState.ERROR));
  }
}

export function* postsSaga() {
  yield takeLatest(PostsActionTypes.FETCH_POSTS, fetchPostsRequest);
}
