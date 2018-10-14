const reducerTotalList = (state = [], action) => {
  switch (action.type) {
    case 'API_GET_FILMS_SUCCESS' :
      return action.payload;
    case 'API_GET_FILMS_FAILURE':
      return action.payload;
    default:
      return state;
  }
};

export default reducerTotalList;
