import { combineReducers } from "redux";
import { postsReducer } from "./posts/reducer";
import { tagsReducer } from "./tags/reducer";
import { postReducer } from "./post/reducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  tags: tagsReducer,
  post: postReducer,
});
