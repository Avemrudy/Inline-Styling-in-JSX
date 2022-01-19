import React from "react";
import ReactDOM from "react-dom";

let customStyle = {
  color: "red",
  fontSize: "50px"
};

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
