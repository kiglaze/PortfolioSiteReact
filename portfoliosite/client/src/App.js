import React, { Component } from "react";

import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

class App extends Component {
  state = {
  };

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div class="main-content">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-sm-12">
                  <section>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                  </section>
                </div>
                <div class="col-md-3 col-sm-12">
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
