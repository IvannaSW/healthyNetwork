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

export const fetchAddPost = (text) => ({
  type: PostsActionTypes.FETCH_ADD_POST,
  payload: text,
});

export const addPost = (post) => ({
  type: PostsActionTypes.ADD_POST,
  payload: post,
});

export const setAddFormState = (addFormState) => ({
  type: PostsActionTypes.SET_ADD_FORM_STATE,
  payload: addFormState,
});

