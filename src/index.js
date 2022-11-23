import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

createRoot(document.querySelector("#root")).render(<App />);
