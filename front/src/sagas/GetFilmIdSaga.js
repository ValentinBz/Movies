import { takeLatest, call, put } from 'redux-saga/effects';
import { API_GET_FILMS } from '../constants/api';
import axios from 'axios';

export default function* watcherSagaFilmId() {
  yield takeLatest("API_GET_FILMS_ID_REQUEST", workerSagaFilmId);
}

function* workerSagaFilmId(obj) {
  try {
    const response = yield call(fetchSagaFilmId, obj.payload);
    const data = response.data;
    yield put({ type: "API_GET_FILMS_ID_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "API_GET_FILMS_ID_FAILURE", payload: error });
  }
}

function fetchSagaFilmId(id) {
  return axios.get(`${API_GET_FILMS}/${id}`);
}
