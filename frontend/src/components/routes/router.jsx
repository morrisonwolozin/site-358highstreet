// 03/08/2026
// src/routes/router.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import RentalPage from "../pages/RentalPage";
import RestrictedPage from "../pages/RestrictedPage";
import NotFound from "../pages/NotFound";
import GalleryRoute from "./GalleryRoute";
import IssuesPage from "../pages/IssuesPage";
import AboutPage from "../pages/AboutPage";
import DownloadsPage from "../pages/DownloadsPage";
import EnergyPage from "../pages/EnergyPage";
import DesignPage from "../pages/DesignPage";
import ProjectCostPage from "../pages/ProjectCostPage";
import IceDamsPage from "../pages/IceDamsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "rental", element: <RentalPage /> },
      { path: "restricted/*", element: <RestrictedPage /> },
      { path: "issues", element: <IssuesPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "downloads", element: <DownloadsPage /> },
      { path: "energy-performance", element: <EnergyPage /> },
      { path: "design", element: <DesignPage /> },
      { path: "solar", element: <SolarPage /> },
      { path: "project-cost", element: <ProjectCostPage /> },
      { path: "construction/ice-dams", element: <IceDamsPage /> },

      // ✅ ONE route handles all galleries (any URL that isn't above)
      { path: "*", element: <GalleryRoute /> },
    ],
  },
]);