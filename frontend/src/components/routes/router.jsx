// src/routes/router.jsx
// Updated: 2026-07-06
// GalleryRoute eliminated — galleries are embedded within their page component.
// All new leaf pages are stubbed; uncomment imports as pages are created.

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import NotFound from "../pages/NotFound";

// ─── existing pages ───────────────────────────────────────────────────────────
import HomePage         from "../pages/HomePage";
import ChallengesPage       from "../pages/ChallengesPage";       // path: /challenges
import DesignPage       from "../pages/DesignPage";
import EnergyPage       from "../pages/EnergyPage";
import SolarPage        from "../pages/SolarPage";
import ProjectCostPage  from "../pages/ProjectCostPage";
import ContactPage      from "../pages/ContactPage";
import AboutPage        from "../pages/AboutPage";
import DownloadsPage    from "../pages/DownloadsPage";
import RentalPage       from "../pages/RentalPage";
import RestrictedPage   from "../pages/RestrictedPage";
import IceDamsPage      from "../pages/IceDamsPage";

// ─── new pages (uncomment as each is created) ─────────────────────────────────
import HistoricalPage      from "../pages/HistoricalPage";
import FoundationPage      from "../pages/FoundationPage";
import AdditionsPage       from "../pages/AdditionsPage";
import PartyWallsPage      from "../pages/PartyWallsPage";
import PlumbingPage        from "../pages/PlumbingPage";
import ExteriorWallsPage   from "../pages/ExteriorWallsPage";
import RoofPage            from "../pages/RoofPage";
import WindowsPage         from "../pages/WindowsPage";
import CrawlspaceWallsPage from "../pages/CrawlspaceWallsPage";
import CrawlspaceFloorsPage from "../pages/CrawlspaceFloorsPage";
import DemolitionPage      from "../pages/DemolitionPage";
import VentilationPage     from "../pages/VentilationPage";
import HeatPumpsPage       from "../pages/HeatPumpsPage";
import RangeHoodPage       from "../pages/RangeHoodPage";
import RentalUnit1Page     from "../pages/RentalUnit1Page";
import RentalUnit2Page     from "../pages/RentalUnit2Page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [

      // ─── top level ──────────────────────────────────────────────────────────
      { index: true,                  element: <HomePage /> },
      { path: "challenges",           element: <ChallengesPage /> },
      { path: "design",               element: <DesignPage /> },
      { path: "energy-performance",   element: <EnergyPage /> },
      { path: "solar",                element: <SolarPage /> },
      { path: "historical",           element: <HistoricalPage /> },
      { path: "project-cost",         element: <ProjectCostPage /> },
      { path: "contact",              element: <ContactPage /> },
      { path: "about",                element: <AboutPage /> },
      { path: "downloads",            element: <DownloadsPage /> },
      { path: "restricted/*",         element: <RestrictedPage /> },

      // ─── construction: envelope ─────────────────────────────────────────────
      { path: "exterior-walls",       element: <ExteriorWallsPage /> },
      { path: "roof",                 element: <RoofPage /> },
      { path: "windows",              element: <WindowsPage /> },
      { path: "crawlspace-walls",     element: <CrawlspaceWallsPage /> },
      { path: "crawlspace-floors",    element: <CrawlspaceFloorsPage /> },

      // ─── construction: structure ────────────────────────────────────────────
      { path: "foundation",           element: <FoundationPage /> },
      { path: "additions",            element: <AdditionsPage /> },
      { path: "party-walls",          element: <PartyWallsPage /> },
      { path: "plumbing",             element: <PlumbingPage /> },

      // ─── construction: hvac ─────────────────────────────────────────────────
      { path: "mechanical-demolition", element: <DemolitionPage /> },
      { path: "erv",                  element: <VentilationPage /> },
      { path: "heat-pumps",           element: <HeatPumpsPage /> },
      { path: "range-hood",           element: <RangeHoodPage /> },

      // ─── construction: other ────────────────────────────────────────────────
      { path: "ice-dams",             element: <IceDamsPage /> },

      // ─── rental ─────────────────────────────────────────────────────────────
      { path: "rental",               element: <RentalPage /> },
      { path: "rental/unit1",         element: <RentalUnit1Page /> },
      { path: "rental/unit2",         element: <RentalUnit2Page /> },

      // ─── catch-all ──────────────────────────────────────────────────────────
      { path: "*",                    element: <NotFound /> },

    ],
  },
]);
