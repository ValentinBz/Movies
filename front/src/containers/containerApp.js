import { connect } from 'react-redux';
import App from '../components/App';
import {bindActionCreators} from "redux";
import {getFirstSaga, getTotalList, getFilmID} from "../actions";

export default connect(state => ({
  totalList: state.totalList,
  filmId: state.filmId,
}), dispatch => ({
  getFirstSaga: bindActionCreators(getFirstSaga, dispatch),
  getTotalList: bindActionCreators(getTotalList, dispatch),
  getFilmID: bindActionCreators(getFilmID, dispatch),
}))(App);
