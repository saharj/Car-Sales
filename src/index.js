import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import { carFeatureReducer } from "./reducers/carFeatureReducer";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(carFeatureReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
