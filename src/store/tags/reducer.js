import produce from "immer";
import { TagsActionTypes, LoadingState } from "./types";

const INITIAL_STATE = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const tagsReducer = produce((draft, action) => {
  switch (action.type) {
    case TagsActionTypes.SET_TAGS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case TagsActionTypes.FETCH_TAGS:
      draft.items = [];
      draft.loadingState = LoadingState.LOADING;
      break;

    case TagsActionTypes.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;

    default:
      break;
  }
}, INITIAL_STATE);
