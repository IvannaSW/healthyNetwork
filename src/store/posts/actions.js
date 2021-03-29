import { PostsActionTypes } from "./types";

export const setPosts = (items) => ({
  type: PostsActionTypes.SET_POSTS,
  payload: items,
});

export const fetchPosts = () => ({
  type: PostsActionTypes.FETCH_POSTS,
});

export const setPostsLoadingState = (loadingState) => ({
  type: PostsActionTypes.SET_LOADING_STATE,
  payload: loadingState,
});
