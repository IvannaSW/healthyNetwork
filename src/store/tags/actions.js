import { TagsActionTypes } from "./types";

export const setTags = (items) => ({
  type: TagsActionTypes.SET_TAGS,
  payload: items,
});

export const fetchTags = () => ({
  type: TagsActionTypes.FETCH_TAGS,
});

export const setTagsLoadingState = (loadingState) => ({
  type: TagsActionTypes.SET_LOADING_STATE,
  payload: loadingState,
});
