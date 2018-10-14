import { takeLatest, spawn } from 'redux-saga/effects';
import watcherSagaAxiosTotalList from './AxiosTotalList';
import watcherSagaFilmId from './GetFilmIdSaga';

export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

function* workerSaga() {
  yield spawn (watcherSagaAxiosTotalList);
  yield spawn (watcherSagaFilmId);
}
