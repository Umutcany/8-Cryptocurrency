import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "antd/dist/reset.css";
import Store from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Provider store={Store}>
      <App />
    </Provider>
  </Router>
);
