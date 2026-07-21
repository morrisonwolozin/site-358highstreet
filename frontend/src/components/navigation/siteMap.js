// src/navigation/siteMap.js
// Updated: 2026-07-06
//
// Notes:
// type: "page"     → dedicated page component, always has a route
// type: "section"  → nav grouping label only, no route, no path
//
// All leaf pages use PageIntro + content (gallery, data, or markdown).
// GalleryRoute eliminated — galleries are embedded within their page.
// Flat paths for all leaf pages — no deep nesting.
// Rental section visibility controlled via SiteConfigContext.

function validatePaths(nodes) {
  nodes.forEach((node) => {
    if (node.path && !node.path.startsWith("/")) {
      console.warn("siteMap path missing leading slash:", node.path);
    }
    if (node.children) validatePaths(node.children);
  });
}

export const siteMap = [
  {
    label: "Home",
    path: "/",
    type: "page",
  },
  {
    label: "Project Goals and Challenges",
    path: "/challenges",
    type: "page",
    summary: "Pre-construction conditions that shaped the retrofit project",
  },
  {
    label: "Historical",
    path: "/historical",
    type: "page",
    summary: "The first two decades of 358 High Street",
  },
  {
    label: "Building Design",
    path: "/design",
    type: "page",
    summary: "Thermal envelope, air leakage, and heating/cooling load analysis",
  },
  {
    label: "Energy Performance",
    path: "/energy-performance",
    type: "page",
    summary: "Whole-building energy use before and after the deep energy retrofit",
  },
  {
    label: "Project Cost",
    path: "/project-cost",
    type: "page",
    summary: "Final costs for the 2025 deep energy retrofit",
  },
  
  {
    label: "Solar Electricity",
    path: "/solar",
    type: "page",
    summary: "Owner-financed photovoltaic supply for both units",
  },
  {
    label: "Construction",
    type: "section",
    children: [
      {
        label: "Retrofit Thermal Envelope",
        type: "section",
        children: [
          {
            label: "Above Grade Walls and Roof",
            path: "/retrofit-wall-roof",
            type: "page",
            summary: "Above-grade wall and roof retrofit assembly upgrades",
          },
          {
            label: "Windows",
            path: "/windows",
            type: "page",
            summary: "Triple-pane window installation",
          },
          {
            label: "Below Grade Walls and Floors",
            path: "/crawlspace-walls-floors",
            type: "page",
            summary: "Below-grade wall insulation and air sealing",
          },
        ],
      },
      {
        label: "Foundation",
        path: "/foundation",
        type: "page",
        summary: "Perimeter excavation, drainage, and waterproofing",
      },
      {
        label: "Additions",
        path: "/additions",
        type: "page",
        summary: "Structural additions to the original building",
      },
      {
        label: "Party Walls",
        path: "/party-walls",
        type: "page",
        summary: "Fire and sound separation between units",
      },
      {
        label: "Plumbing",
        path: "/plumbing",
        type: "page",
        summary: "Domestic hot water and plumbing upgrades",
      },
      {
        label: "HVAC",
        type: "section",
        children: [
          {
            label: "Demolition",
            path: "/mechanical-demolition",
            type: "page",
            summary: "Removal of existing mechanical systems",
          },
          {
            label: "Ventilation",
            path: "/erv",
            type: "page",
            summary: "Energy recovery ventilation system",
          },
          {
            label: "Heating & Cooling",
            path: "/heat-pumps",
            type: "page",
            summary: "Heat pump installation for both units",
          },
          {
            label: "Range Hood",
            path: "/range-hood",
            type: "page",
            summary: "Kitchen exhaust ventilation",
          },
        ],
      },
    ],
  },
  {
    label: "Ice Dams",
    path: "/ice-dams",
    type: "page",
    summary: "An unexpected first-winter challenge — diagnosed and resolved",
  },
  {
    label: "Contact Me",
    path: "/contact",
    type: "page",
    summary: "Questions about the project or rental availability?",
  },
  {
    label: "Rental",
    type: "section",
    children: [
      {
        label: "Rental Features",
        path: "/rental",
        type: "page",
        summary: "Apartment features and amenities",
      },
      {
        label: "Unit 1 Photos",
        path: "/rental/unit1",
        type: "page",
        summary: "Photos of Unit 1",
      },
      {
        label: "Unit 2 Photos",
        path: "/rental/unit2",
        type: "page",
        summary: "Photos of Unit 2",
      },
    ],
  },
  {
    label: "About",
    path: "/about",
    type: "page",
    summary: "Project team, design philosophy and credits",
  },
  {
    label: "Downloads",
    path: "/downloads",
    type: "page",
    summary: "Construction drawings, reports and project documents",
  },
  {
    label: "Restricted",
    path: "/restricted",
    type: "page",
  },
];

validatePaths(siteMap);