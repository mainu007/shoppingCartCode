import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { ProviderComponent } from "./components/context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ProviderComponent>
        <App />
      </ProviderComponent>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
