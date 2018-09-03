import React, { Component } from "react";
import { connect } from "react-redux";
import CoinItems from "./CoinItems";
import "../App.css";
import { getCryptoData } from "../actions/Sort";

class CoinContainer extends Component {
  componentDidMount() {
    this.props.getCryptoData();
  }

  render() {
    const { data } = this.props;

    return <CoinItems coins={data} />;
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getCryptoData }
)(CoinContainer);
