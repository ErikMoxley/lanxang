import React, { Component } from "react";
import Topnav from "./components/navigation/Topnav";
import Botnav from "./components/navigation/Botnav";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import { Promos } from "./pages/Promos";
import { Order } from "./pages/Order";
import { Contact } from "./pages/Contact";
import { Careers } from "./pages/Careers";
import Footer from "./components/Footer";

import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "./styles/Global";

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
            <Route exact path="/about" component={About} />
            <Route exact path="/menu" component={Menu} />}
            <Route exact path="/promos" component={Promos} />}
            <Route exact path="/order" component={Order} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/careers" component={Careers} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
