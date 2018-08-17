const init_state = {
  data: []
};

export default function(state = init_state, action) {
  switch (action.type) {
    case "GET_CRYPTO":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
