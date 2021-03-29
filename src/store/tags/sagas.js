import { call, put, takeLatest } from "redux-saga/effects";
import { TagsApi } from "../../services/api/tagsAPI";
import { setTags, setTagsLoadingState } from "./actions";
import { TagsActionTypes, LoadingState } from "./types";

export function* fetchTagsRequest() {
  try {
    const items = yield call(TagsApi.fetchTags);
    yield put(setTags(items));   
  } catch (error) {
    yield put(setTagsLoadingState(LoadingState.ERROR));
  }
}

export function* tagsSaga() {
  yield takeLatest(TagsActionTypes.FETCH_TAGS, fetchTagsRequest);
}
