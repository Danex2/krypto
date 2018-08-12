import React, { Component } from "react";
import axios from "axios";
import CoinItems from "./CoinItems";
import "../App.css";

export default class CoinContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      sortedSupply: [],
      sortedCap: [],
      sortedPrice: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        "https://api.coinmarketcap.com/v2/ticker/?limit=100&sort=id&structure=array"
      )
      .then(response => {
        this.setState({ data: response.data.data, loading: false });
      });
  }

  /* I have no idea why or how the code works below, legit it just worked so I went with it
  Probably going to refactor at some point and use redux*/
  sortMarketSupplyDesc = () => {
    const sortedSup = this.state.data.sort(function(a, b) {
      if (a.circulating_supply > b.circulating_supply) return -1;
      if (a.circulating_supply < b.circulating_supply) return 1;
      return 0;
    });
    this.setState({ sortedSupply: sortedSup });
  };

  sortMarketSupplyAsc = () => {
    const sortedSup = this.state.data.sort(function(a, b) {
      if (a.circulating_supply < b.circulating_supply) return -1;
      if (a.circulating_supply > b.circulating_supply) return 1;
      return 0;
    });
    this.setState({ sortedSupply: sortedSup });
  };

  sortCapAsc = () => {
    const sortedCap = this.state.data.sort(function(a, b) {
      if (a.quotes.USD.market_cap < b.quotes.USD.market_cap) return -1;
      if (a.quotes.USD.market_cap > b.quotes.USD.market_cap) return 1;
      return 0;
    });
    this.setState({ sortedCap });
  };

  sortCapDesc = () => {
    const sortedCap = this.state.data.sort(function(a, b) {
      if (a.quotes.USD.market_cap > b.quotes.USD.market_cap) return -1;
      if (a.quotes.USD.market_cap < b.quotes.USD.market_cap) return 1;
      return 0;
    });
    this.setState({ sortedCap });
  };

  sortPriceAsc = () => {
    const sortedPrice = this.state.data.sort(function(a, b) {
      if (a.quotes.USD.price < b.quotes.USD.price) return -1;
      if (a.quotes.USD.price > b.quotes.USD.price) return 1;
      return 0;
    });
    this.setState({ sortedPrice });
  };

  sortPriceDesc = () => {
    const sortedPrice = this.state.data.sort(function(a, b) {
      if (a.quotes.USD.price > b.quotes.USD.price) return -1;
      if (a.quotes.USD.price < b.quotes.USD.price) return 1;
      return 0;
    });
    this.setState({ sortedPrice });
  };

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div className="spinner-container">
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle" />
              </div>
              <div className="gap-patch">
                <div className="circle" />
              </div>
              <div className="circle-clipper right">
                <div className="circle" />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <CoinItems
          coins={this.state.data}
          sortDesc={this.sortMarketSupplyDesc}
          sortAsc={this.sortMarketSupplyAsc}
          sortCapAsc={this.sortCapAsc}
          sortCapDesc={this.sortCapDesc}
          sortPriceAsc={this.sortPriceAsc}
          sortPriceDesc={this.sortPriceDesc}
        />
      </div>
    );
  }
}
