const init_state = {
  data: [],
  loading: false
};

export default function(state = init_state, action) {
  switch (action.type) {
    case "GET_CRYPTO":
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case "CRYPTO_LOADING":
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
