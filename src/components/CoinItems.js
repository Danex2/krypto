import React from "react";
import "../App.css";

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CoinItems = ({ coins, sortSupply }) => {
  return (
    <div>
      <table className="responsive-table centered striped">
        <thead>
          <tr>
            <th>Coin</th>
            <th>
              Supply <button>▲</button>
              <button>▼</button>
            </th>
            <th>
              Market Cap <button>▲</button>
              <button>▼</button>
            </th>
            <th>
              Price <button>▲</button>
              <button>▼</button>
            </th>
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
                  <span
                    className={
                      coin.quotes.USD.percent_change_1h > 0 ? "up" : "down"
                    }
                  >
                    % {coin.quotes.USD.percent_change_1h}{" "}
                  </span>
                </td>
                <td>
                  <span
                    className={
                      coin.quotes.USD.percent_change_7d > 0 ? "up" : "down"
                    }
                  >
                    % {coin.quotes.USD.percent_change_7d}{" "}
                  </span>
                </td>
                <td>
                  <span
                    className={
                      coin.quotes.USD.percent_change_24h > 0 ? "up" : "down"
                    }
                  >
                    % {coin.quotes.USD.percent_change_24h}{" "}
                  </span>
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
