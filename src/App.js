import React, { Component } from "react";
import "./styles/App.css";

import { BrowserRouter as Router } from "react-router-dom";

// Redux
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import Navigation from "./views/Navigation";

export default class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <Router>
          <Navigation />
        </Router>
      </ReduxProvider>
    );
  }
}
