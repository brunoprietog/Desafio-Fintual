function reducer(state = { stocks: [] }, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        stocks: state.stocks.push(action.stock)
      };
    default:
      return state;
  }
}

export default reducer;
