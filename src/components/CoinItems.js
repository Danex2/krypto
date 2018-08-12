import React from "react";
import "../App.css";

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CoinItems = ({ coins }) => {
  return (
    <div>
      <table className="responsive-table centered striped">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Supply</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th>Change (1h)</th>
            <th>Change (7d)</th>
            <th>Change (24h)</th>
            <th>Rank</th>
          </tr>
        </thead>

        <tbody>
          {coins.map(coin => {
            return (
              <tr key={coin.id}>
                <td>{coin.name}</td>
                <td>
                  {coin.circulating_supply != null
                    ? numberWithCommas(coin.circulating_supply)
                    : "Unknown"}
                </td>
                <td>
                  $
                  {coin.quotes.USD.market_cap != null
                    ? numberWithCommas(coin.quotes.USD.market_cap)
                    : "Unknown"}
                </td>
                <td>${coin.quotes.USD.price.toFixed(2)} (USD)</td>
                <td>
                  {coin.quotes.USD.percent_change_1h > 0 ? (
                    <span className="up">
                      {" "}
                      {coin.quotes.USD.percent_change_1h}
                    </span>
                  ) : (
                    <span className="down">
                      {coin.quotes.USD.percent_change_1h}
                    </span>
                  )}
                </td>
                <td>
                  {coin.quotes.USD.percent_change_7d > 0 ? (
                    <span className="up">
                      {" "}
                      {coin.quotes.USD.percent_change_7d}
                    </span>
                  ) : (
                    <span className="down">
                      {coin.quotes.USD.percent_change_7d}
                    </span>
                  )}
                </td>
                <td>
                  {coin.quotes.USD.percent_change_24h > 0 ? (
                    <span className="up">
                      {" "}
                      {coin.quotes.USD.percent_change_24h}
                    </span>
                  ) : (
                    <span className="down">
                      {coin.quotes.USD.percent_change_24h}
                    </span>
                  )}
                </td>
                <td>{coin.rank}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoinItems;
