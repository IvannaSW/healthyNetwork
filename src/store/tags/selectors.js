import { createSelector } from "reselect";
import { LoadingState } from "./types";

export const selectTags = (state) => state.tags;

export const selectLoadingState = (state) => selectTags(state).loadingState;

export const selectIsTagsLoading = (state) =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTagsLoaded = (state) =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTagsItems = createSelector(
  selectTags,
  (tags) => tags.items
);
