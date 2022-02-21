import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, } from "react-router-dom"

//stylesheet
import "./functionBased/App.css"
import App from "./functionBased/App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  ,
  document.getElementById("root")
);
