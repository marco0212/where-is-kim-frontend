import React from "react";
import ReactDom from "react-dom";
import App from "./components/App/Container";
import { Provider } from "react-redux";
import store from "./store";
import "./moment.config";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
