import React from "react";
import ReactDom from "react-dom";
import App from "./app";

import "./app.css";

const mountNode = document.querySelector("#app");
ReactDom.render(<App />, mountNode);
