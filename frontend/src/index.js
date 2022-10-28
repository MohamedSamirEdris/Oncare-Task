import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bulma/css/bulma.css";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../src/store/store.js";

axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);