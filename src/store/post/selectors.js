import { LoadingState } from "../posts/types";

export const selectPost = (state) => state.post;

export const selectLoadingState = (state) => selectPost(state).loadingState;

export const selectIsPostLoading = (state) =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsPostLoaded = (state) =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectPostData = (state) => selectPost(state).data;
