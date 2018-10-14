import { combineReducers } from 'redux';
import reducerTotalList from './reducerTotalList';
import reducerFilmId from './reducerFilmId'

const rootReducer = combineReducers({
  totalList: reducerTotalList,
	filmId: reducerFilmId,
});

export default rootReducer;
