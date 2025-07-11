// entry point – mounts React app
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/home.css";
import "./styles/recommendation.css";
import "./styles/itinerary.css";
import "./parseConfig"; // Parse initialization

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
