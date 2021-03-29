import { PostActionTypes } from "./types";

export const setPostData = (data) => ({
  type: PostActionTypes.SET_POST_DATA,
  payload: data,
});

export const fetchPostData = (postId) => ({
  type: PostActionTypes.FETCH_POST_DATA,
  payload: postId,
});

export const setPostLoadingState = (loadingState) => ({
  type: PostActionTypes.SET_LOADING_STATE,
  payload: loadingState,
});
