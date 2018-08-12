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
      sorted: []
    };
  }

  sortBy = data => {
    let sortedSupply = this.state.data.sort((a, b) => {
      return a.cirulating_supply - b.cirulating_supply;
    });
    this.setState({ sorted: sortedSupply });
  };

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
    return <CoinItems coins={this.state.data} sortSupply={this.sortBy} />;
  }
}
