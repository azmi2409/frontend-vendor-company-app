import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CompanyProvider from "./context/companyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CompanyProvider>
      <App />
    </CompanyProvider>
  </React.StrictMode>
);
