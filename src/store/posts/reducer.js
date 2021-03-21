import produce from "immer";
import { PostsActionTypes, LoadingState } from "./types";

const INITIAL_STATE = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const postsReducer = produce((draft, action) => {
  switch (action.type) {
    case PostsActionTypes.SET_POSTS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case PostsActionTypes.FETCH_POSTS:
      draft.items = [];
      draft.loadingState = LoadingState.LOADING;
      break;

    case PostsActionTypes.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;

    default:
      break;
  }
}, INITIAL_STATE);
