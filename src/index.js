import React from "react";
import App from "app";

import renderApp from "./renderApp";
import registerServiceWorker from "./registerServiceWorker";
import "react-md/dist/react-md.green-amber.min.css";
import "./index.css";

renderApp(<App />, document.getElementById("root"));
registerServiceWorker();

if (module.hot) {
  module.hot.accept("app", () => {
    renderApp(<App />, document.getElementById("root"));
  });
}
