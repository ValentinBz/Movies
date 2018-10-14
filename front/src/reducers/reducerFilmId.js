const reducerFilmId = (state = 0, action) => {
  switch (action.type) {
    case 'API_GET_FILMS_ID_SUCCESS' :
      return action.payload;
    case 'API_GET_FILMS_ID_FAILURE':
      return action.payload;
    default:
      return state;
  }
};

export default reducerFilmId;
