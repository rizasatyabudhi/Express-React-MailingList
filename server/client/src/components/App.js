// App.js is responsible for the initial view setup
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import store from "../reducers/index";

import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => {
  return <h2>Dashboard</h2>;
};
const SurveyNew = () => {
  return <h2>SurveyNew</h2>;
};

// <BrowserRouter> can only have 1 child component
// exact === exact = {true}

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(null, actions)(App);
