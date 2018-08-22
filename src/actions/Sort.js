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

export const sortSupplyDesc = () => {
  console.log("is this even being clicked");
  return {
    type: "SORT_SUPPLY_DESC"
  };
};
