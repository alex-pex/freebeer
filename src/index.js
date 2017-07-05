import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "app";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

if (module.hot) {
  module.hot.accept("app", () => {
    ReactDOM.render(<App />, document.getElementById("root"));
  });
}
