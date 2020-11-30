/*Primary file to render components
  to the DOM. */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Grid from "./Grid";


ReactDOM.render(
  <div>
    <App />
    <Grid />
  </div>,
  document.getElementById("root")
);


