import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProviderTaskContext } from "./context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderTaskContext>
      <App />
    </ProviderTaskContext>
  </React.StrictMode>
);
