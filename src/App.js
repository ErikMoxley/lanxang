import React, { Component } from "react";
import Topnav from "./components/navigation/Topnav";
import Botnav from "./components/navigation/Botnav";
import Footer from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import { Promos } from "./pages/Promos";
import { Order } from "./pages/Order";
import { Contact } from "./pages/Contact";
import { Careers } from "./pages/Careers";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/Scroll/ScrollToTop.js";

import GlobalStyle from "./styles/Global";
import "./App.css";

class App extends Component {
  state = {
    navbarOpen: false
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <div className="container">
          <Topnav
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar}
          />
          <Botnav
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar}
          />
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/menu" component={Menu} />
            <Route path="/promos" component={Promos} />
            <Route path="/order" component={Order} />
            <Route path="/contact" component={Contact} />
            <Route path="/careers" component={Careers} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
