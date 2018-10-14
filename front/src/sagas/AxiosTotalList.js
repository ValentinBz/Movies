import { takeLatest, call, put } from 'redux-saga/effects';
import { API_GET_FILMS } from '../constants/api';
import axios from 'axios';

export default function* watcherSagaAxiosTotalList() {
  yield takeLatest("API_GET_FILMS_REQUEST", workerSagaAxiosTotalList);
}

function* workerSagaAxiosTotalList() {
  try {
    const response = yield call(fetchSagaAxiosTotalList);
    const data = response.data;
    yield put({ type: "API_GET_FILMS_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "API_GET_FILMS_FAILURE", payload: error });
  }
}

function fetchSagaAxiosTotalList() {
  return axios.get(`${API_GET_FILMS}`);
}
