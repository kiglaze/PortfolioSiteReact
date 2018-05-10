import React, { Component } from "react";
import Nav from "./Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div>
        <Nav
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        Based on `this.state.currentPage`, render the appropriate component
        here.
        <p>{this.state.currentPage}</p>
      </div>
    );
  }
}

export default PortfolioContainer;
