import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import {
  Navbar,
  ProductList,
  Details,
  Cart,
  Default,
  Modal,
} from "./components";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="" component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}
