import produce from "immer";
import { PostActionTypes, LoadingState } from "./types";

const INITIAL_STATE = {
  data: undefined,
  loadingState: LoadingState.NEVER,
};

export const postReducer = produce((draft, action) => {
  switch (action.type) {
    case PostActionTypes.SET_POST_DATA:
      draft.data = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case PostActionTypes.FETCH_POST_DATA:
      draft.data = undefined;
      draft.loadingState = LoadingState.LOADING;
      break;

    case PostActionTypes.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;

    default:
      break;
  }
}, INITIAL_STATE);
