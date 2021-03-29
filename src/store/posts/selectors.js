import { createSelector } from "reselect";
import { LoadingState } from "../posts/types";

export const selectPosts = (state) => state.posts;

export const selectLoadingState = (state) => selectPosts(state).loadingState;

export const selectIsPostsLoading = (state) =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsPostsLoaded = (state) =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectPostsItems = createSelector(
  selectPosts,
  (posts) => posts.items
);
