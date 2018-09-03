import React from "react";
import "../App.css";
import { connect } from "react-redux";
import {
  sortSupplyAsc,
  sortSupplyDesc,
  sortCapAsc,
  sortCapDesc,
  sortPriceAsc,
  sortPriceDesc
} from "../actions/Sort";

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

class CoinItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = e => {
    this.setState({ text: e.target.value.substr(0, 20) });
  };
  render() {
    const { coins } = this.props;
    let filter = coins.filter(coin => {
      return (
        coin.name.toLowerCase().indexOf(this.state.text.toLowerCase()) !== -1
      );
    });
    return (
      <div>
        <div class="nav-wrapper">
          <form>
            <div class="input-field">
              <input
                id="search"
                type="search"
                autoComplete="off"
                value={this.state.text}
                placeholder="Seach for coin.."
                onChange={this.handleChange}
              />
              <label class="label-icon" for="search">
                <i class="material-icons">search</i>
              </label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
        <table className="responsive-table centered striped">
          <thead>
            <tr>
              <th>Coin</th>
              <th>
                Supply{" "}
                <button onClick={() => this.props.sortSupplyAsc()}>▲</button>
                <button onClick={() => this.props.sortSupplyDesc()}>▼</button>
              </th>
              <th>
                Market Cap{" "}
                <button onClick={() => this.props.sortCapAsc()}>▲</button>
                <button onClick={() => this.props.sortCapDesc()}>▼</button>
              </th>
              <th>
                Price{" "}
                <button onClick={() => this.props.sortPriceAsc()}>▲</button>
                <button onClick={() => this.props.sortPriceDesc()}>▼</button>
              </th>
              <th>Change (1h)</th>
              <th>Change (7d)</th>
              <th>Change (24h)</th>
              <th>Rank</th>
            </tr>
          </thead>

          <tbody>
            {filter.map(coin => {
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
  }
}

export default connect(
  null,
  {
    sortSupplyAsc,
    sortSupplyDesc,
    sortCapAsc,
    sortCapDesc,
    sortPriceAsc,
    sortPriceDesc
  }
)(CoinItems);
