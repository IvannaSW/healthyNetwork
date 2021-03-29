import produce from "immer";
import { PostsActionTypes, LoadingState, AddFormState } from "./types";

const INITIAL_STATE = {
  items: [],
  loadingState: LoadingState.NEVER,
  addFormState: AddFormState.NEVER,
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

    case PostsActionTypes.SET_ADD_FORM_STATE:
      draft.addFormState = action.payload;
      break;

    case PostsActionTypes.FETCH_ADD_POST:
      draft.addFormState = AddFormState.LOADING;
      break;

    case PostsActionTypes.ADD_POST:
      draft.items.push(action.payload);
      draft.addFormState = AddFormState.NEVER;
      break;

    default:
      break;
  }
}, INITIAL_STATE);
