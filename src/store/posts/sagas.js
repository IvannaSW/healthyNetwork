import { call, put, takeLatest } from "redux-saga/effects";
import { PostsApi } from "../../services/api/postsAPI";
import {
  addPost,
  setPosts,
  setPostsLoadingState,
  setAddFormState,
} from "./actions";
import { PostsActionTypes, LoadingState, AddFormState } from "./types";

export function* fetchPostsRequest() {
  try {
    const items = yield call(PostsApi.fetchPosts);
    yield put(setPosts(items));
  } catch (error) {
    yield put(setPostsLoadingState(LoadingState.ERROR));
  }
}

export function* fetchAddPostRequest({ payload: text }) {
  try {
    const post = {
      _id: Math.random().toString(36).substr(2),
      text,
      user: {
        fullname: "Brian Vaughn 🖤",
        username: "brian_d_vaughn",
        avatarUrl:
          "https://images.unsplash.com/photo-1616740382883-1e656ae768a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80",
      },
    };
    const item = yield call(PostsApi.addPost, post);
    yield put(addPost(item));
  } catch (error) {
    yield put(setAddFormState(AddFormState.ERROR));
  }
}

export function* postsSaga() {
  yield takeLatest(PostsActionTypes.FETCH_POSTS, fetchPostsRequest);
  yield takeLatest(PostsActionTypes.FETCH_ADD_POST, fetchAddPostRequest);
}
