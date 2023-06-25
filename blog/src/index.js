import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppcontextProvider from "./context/Appcontext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppcontextProvider>
    <App />
  </AppcontextProvider>
  
);
