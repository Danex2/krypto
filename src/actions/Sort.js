import axios from "axios";

export const getCryptoData = () => dispatch => {
  axios
    .get(
      "https://api.coinmarketcap.com/v2/ticker/?limit=100&sort=id&structure=array"
    )
    .then(res => {
      dispatch({
        type: "GET_CRYPTO",
        payload: res.data.data
      });
    });
};
