import {
  API_CALL_REQUEST,
  API_GET_FILMS_REQUEST,
  API_GET_FILMS_ID_REQUEST
} from '../constants/actions';

export function getFirstSaga() {
  return { type: API_CALL_REQUEST }
}

export function getTotalList() {
  return { type: API_GET_FILMS_REQUEST }
}

export function getFilmID(id) {
  return { type: API_GET_FILMS_ID_REQUEST, payload: id }
}
