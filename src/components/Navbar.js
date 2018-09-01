import React from "react";
import { connect } from "react-redux";
import { searchForCoin } from "../actions/Sort";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
    this.props.searchCoin(this.state.text);
  };
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper grey darken-4">
            <a href="#" className="brand-logo center">
              Krypto
            </a>

            <div className="input-field right">
              <input
                id="search"
                type="search"
                placeholder="search for coin"
                onChange={this.handleChange}
                autoComplete="off"
                required
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

//Remember that if it takes an argument that i also need to define it here
const mapDispatchToProps = dispatch => ({
  searchCoin: coin => dispatch(searchForCoin(coin))
});

const mapStateToProps = state => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
