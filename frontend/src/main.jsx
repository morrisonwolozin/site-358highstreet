// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { SiteConfigProvider } from "./config/SiteConfigContext";
import "./index.css";
import { router } from "./components/routes/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteConfigProvider>
      <RouterProvider router={router} />
    </SiteConfigProvider>
  </React.StrictMode>
);
