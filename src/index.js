import React from "react";
import ReactDOM from "react-dom";

const name = "Sagar";
const lucky_number = Math.floor(Math.random() * 10);
ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <h2> My lucky number is {lucky_number}</h2>
  </div>,
  document.getElementById("root")
);
