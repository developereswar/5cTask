import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeComponent from "./Pages/home";
import InnerPage from "./Pages/innerpage";

//Redux
import { Provider } from "react-redux";
import { store } from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/details" component={InnerPage} />
        </Router>
      </Provider>
    );
  }
}
