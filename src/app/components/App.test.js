import React from "react";
import renderApp from "renderApp";

import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  renderApp(<App />, div);
});
