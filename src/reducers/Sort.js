const init_state = {
  data: []
};

export default function(state = init_state, action) {
  switch (action.type) {
    case "GET_CRYPTO":
      return Object.assign({}, state, {
        data: action.payload
      });
    case "SORT_SUPPLY_ASC":
      return Object.assign({}, state, {
        data: state.data.slice().sort((a, b) => {
          if (a.circulating_supply < b.circulating_supply) return -1;
          if (a.circulating_supply > b.circulating_supply) return 1;
          return 0;
        })
      });
    case "SORT_SUPPLY_DESC":
      return Object.assign({}, state, {
        data: state.data.slice().sort((a, b) => {
          if (a.circulating_supply > b.circulating_supply) return -1;
          if (a.circulating_supply < b.circulating_supply) return 1;
          return 0;
        })
      });
    case "SORT_CAP_ASC":
      return Object.assign({}, state, {
        data: state.data.slice().sort((a, b) => {
          if (a.quotes.USD.market_cap < b.quotes.USD.market_cap) return -1;
          if (a.quotes.USD.market_cap > b.quotes.USD.market_cap) return 1;
          return 0;
        })
      });
    case "SORT_CAP_DESC":
      return Object.assign({}, state, {
        data: state.data.slice().sort((a, b) => {
          if (a.quotes.USD.market_cap > b.quotes.USD.market_cap) return -1;
          if (a.quotes.USD.market_cap < b.quotes.USD.market_cap) return 1;
          return 0;
        })
      });
    case "SORT_PRICE_ASC":
      return Object.assign({}, state, {
        data: state.data.slice().sort((a, b) => {
          if (a.quotes.USD.price < b.quotes.USD.price) return -1;
          if (a.quotes.USD.price > b.quotes.USD.price) return 1;
          return 0;
        })
      });
    case "SORT_PRICE_DESC":
      return Object.assign({}, state, {
        data: state.data.slice().sort((a, b) => {
          if (a.quotes.USD.price > b.quotes.USD.price) return -1;
          if (a.quotes.USD.price < b.quotes.USD.price) return 1;
          return 0;
        })
      });
    default:
      return state;
  }
}
