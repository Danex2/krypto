import axios from "axios";

export const getCryptoData = () => dispatch => {
  axios
    .get(
      "https://api.coinmarketcap.com/v2/ticker/?limit=100&sort=id&structure=array"
    )
    .then(res => {
      dispatch(setCryptoLoading());
      dispatch({
        type: "GET_CRYPTO",
        payload: res.data.data,
        loading: true
      });
    });
};

export const sortBySupplyDesc = supply => {
  return {
    type: "SORT_SUPPLY",
    payload: supply
  };
};

export const setCryptoLoading = () => {
  return {
    type: "CRYPTO_LOADING"
  };
};
