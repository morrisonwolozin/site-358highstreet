// src/navigation/siteMap.js
// Updated: 2026-03-22
//
// Notes:
// type: "gallery"  → render via GalleryRoute using URL as key
// type: "page"     → render a dedicated page component
// type: "section"  → nav grouping node only (may also have a path)
//
// src
// │
// ├─ routes/
// │   router.jsx
// │
// ├─ layouts/
// │   RootLayout.jsx
// │
// ├─ pages/
// │   HomePage.jsx
// │   IssuesPage.jsx
// │   DesignPage.jsx
// │   EnergyPage.jsx
// │   AboutPage.jsx
// │   DownloadsPage.jsx
// │   RentalPage.jsx
// │   RestrictedPage.jsx
// │
// ├─ navigation/
// │   SidebarNav.jsx
// │   MobileMenu.jsx
// │   Breadcrumbs.jsx
// │
// ├─ components/
// │   Gallery.jsx
// │   MarkdownPage.jsx
// │   HeaderBanner.jsx
// │   Footer.jsx
// │   Modal.jsx
// │
// ├─ content/
// │   goals-challenges.md
// │   design-narrative.md
// │   about.md
// │
// ├─ data/
// │   galleryIndex.js
// │   energyData.js
// │   designData.js
// │   downloads.js
// │
// └─ utils/
//     utils.js

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
    label: "Project Challenges",
    path: "/issues",
    type: "page",
    summary: "Pre-construction conditions that shaped the retrofit project",
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
    label: "Historical",
    path: "/historical",
    type: "gallery",
    summary: "358 High Street's 'checkered' past.",
    intro:
      "The residence was built behind 360 High Street in 2004. There were numerous issues with its siting and construction. The was no lot division to separate it from 360 High Street. It failed comply with lot setbacks on its south side. The was no driveway, nor parking. Site drainage from its up hill, west side, was not considered. There were no fire walls between the apartments in its 42 in. crawl space. Its original owners defaulted and a mortgage company assumed ownership. A consent agreement was reached with the Town of Belfast to correct permitting and zoning deficiencies in 2013. The photo gallery below shows its original 'name plates' and its pre-construction conditions in 2023.",
  },

  { label: "Project Cost", path: "/project-cost", type: "page",
  summary: "Final costs for the 2025 deep energy retrofit" },
  {
    label: "Construction",
    path: "/construction",
    type: "section",
    summary: "A deep energy retrofit 'lite' of a conventional single-story duplex residence",
    intro:
      "Goals: reduce envelope thermal transmission rates, increase air tightness, add energy recovery ventilation, range hood exhaust, HVAC electrification and bulk water drainage.",
    children: [
      {
        label: "Envelope",
        path: "/construction/envelope",
        type: "section",
        children: [
          { label: "Above Grade Walls & Roof",   path: "/construction/envelope/der-exterior-walls-and-roof",    type: "gallery" },
          { label: "Windows",                    path: "/construction/envelope/der-windows",                    type: "gallery" },
          { label: "Below Grade Walls",          path: "/construction/envelope/der-interior-crawl-space-walls", type: "gallery" },
          { label: "Below Grade Floor",          path: "/construction/envelope/der-crawl-space-floors",         type: "gallery" },
          { label: "Roof Interior",              path: "/construction/envelope/der-roof-interior",              type: "gallery" },
        ],
      },
      {
        label: "Foundation",
        path: "/construction/foundation",
        type: "gallery",
        summary: "The perimeter of the original building was excavated",
        intro:
          "Surface water from above the site is diverted to either side of the building; gutters and sump pumps in the additions remove site bulk water.",
      },
      { label: "Additions",    path: "/construction/additions",    type: "gallery" },
      { label: "Party Walls",  path: "/construction/party-walls",  type: "gallery" },
      { label: "HVAC",
        path: "/construction/hvac",
        type: "section",
        children: [
          { label: "HVAC Demolition",       path: "/construction/hvac/mechanical-demolition", type: "gallery" },
          { label: "Ventilation",           path: "/construction/hvac/erv",                   type: "gallery" },
          { label: "Heating and Cooling",   path: "/construction/hvac/heat-pumps",            type: "gallery" },
          { label: "Range Hood Exhaust",    path: "/construction/hvac/kitchen-range-hood",    type: "gallery" },
        ],
      },
     { label: "Ice Dams",  path: "/construction/ice-dams",  type: "page", summary: "An unexpected first-winter challenge — diagnosed and resolved" },

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
  {
    label: "Rental Features",
    path: "/rental",
    type: "page",
  },
  {
    label: "Rental Photos",
    path: "/rental/photos",
    type: "gallery",
    children: [
      { label: "Unit 1", path: "/rental/photos/unit1", type: "gallery" },
      { label: "Unit 2", path: "/rental/photos/unit2", type: "gallery" },
    ],
  },
];

validatePaths(siteMap);
