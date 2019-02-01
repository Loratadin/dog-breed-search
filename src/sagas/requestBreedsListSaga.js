import { call, put } from "redux-saga/effects";
import { fetchBreedsListAPI } from "../api/fetchBreedsListAPI";
import { receiveBreeds } from '../store/actions';

export default function* requestBreedsSaga(action) {
    try {
        const data = yield call(fetchBreedsListAPI);
        yield put(receiveBreeds(data));
    } catch (e) {
        
    }
}