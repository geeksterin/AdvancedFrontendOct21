import React from "react";
import ReactDOM from "react-dom";
import { initializeFirebase } from "./helperFunctions/firebase";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

initializeFirebase();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
