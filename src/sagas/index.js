import {takeEvery, all} from "redux-saga/effects";
import {FETCH_BREEDS, FETCH_IMAGES} from "./store/actions";
import requestBreedsListSaga from "./requestBreedsListSaga";
import requestImagesSaga from "./requestImagesSaga";

function* fetch() {
  yield takeEvery(FETCH_BREEDS, requestBreedsListSaga);
  yield takeEvery(FETCH_IMAGES, requestImagesSaga);
}

export default function* rootSaga() {
  yield all([
    fetch()
  ]);
}
