import { call, put } from "redux-saga/effects";
import { fetchImageAPI } from "../api/fetchImageAPI";
import { receiveImages } from './store/actions';

export default function* requestImagesSaga(action) {
    try {
        const data = yield call(fetchImageAPI);
        yield put(receiveImages(data));
    } catch (e) {
        console.log(e);
    }
}