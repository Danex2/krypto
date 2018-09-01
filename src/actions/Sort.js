import axios from "axios";

export const getCryptoData = () => dispatch => {
  axios
    .get(
      "https://api.coinmarketcap.com/v2/ticker/?limit=100&sort=id&structure=array",
      { crossdomain: true }
    )
    .then(res => {
      dispatch({
        type: "GET_CRYPTO",
        payload: res.data.data
      });
    });
};

export const sortSupplyAsc = () => {
  return {
    type: "SORT_SUPPLY_ASC"
  };
};

export const sortSupplyDesc = () => {
  return {
    type: "SORT_SUPPLY_DESC"
  };
};

export const sortCapAsc = () => {
  return {
    type: "SORT_CAP_ASC"
  };
};

export const sortCapDesc = () => {
  return {
    type: "SORT_CAP_DESC"
  };
};

export const sortPriceAsc = () => {
  return {
    type: "SORT_PRICE_ASC"
  };
};

export const sortPriceDesc = () => {
  return {
    type: "SORT_PRICE_DESC"
  };
};

export const searchForCoin = coin => {
  return {
    type: "SEARCH_COIN",
    payload: coin
  };
};
