// inde.js is responsible for Redux Setup (data setup)
import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers/index";
// 1st param = list of reducer
// 2nd param = for SSR
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
window.store = store;
ReactDOM.render(
  // Provider is to connect Redux with React
  // So all of our child component can access the Redux Store
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

console.log("STRIPE KEY IS : ", process.env.REACT_APP_STRIPE_KEY);
console.log("Environment is : ", process.env.NODE_ENV);
