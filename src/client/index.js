import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import App from "../app/components/App";
import * as OfflinePluginRuntime from "offline-plugin/runtime";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
OfflinePluginRuntime.install();
