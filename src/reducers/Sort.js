const init_state = {
  data: []
};

export default function(state = init_state, action) {
  switch (action.type) {
    case "GET_CRYPTO":
      return Object.assign({}, state, {
        data: action.payload
      });
    case "SORT_SUPPLY_DESC":
      return Object.assign({}, state, {
        data: state.data.slice().sort((a, b) => {
          return a.circulating_supply - b.circulating_supply;
        })
      });
    default:
      return state;
  }
}
