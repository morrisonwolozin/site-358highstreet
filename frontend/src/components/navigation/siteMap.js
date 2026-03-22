// src/navigation/siteMap.js  3/1/2026
//Notes:
// type: "gallery" means “render via GalleryRoute using URL as key”.
// type: "page" means “render a real page component”.
// type: "section" is just a nav grouping node.
//
// src
// │
// ├─ routes
// │   router.jsx
// │
// ├─ layouts
// │   RootLayout.jsx
// │
// ├─ pages
// │   HomePage.jsx
// │   RentalPage.jsx
// │   RestrictedPage.jsx
// │
// ├─ navigation
// │   SidebarNav.jsx
// │   MobileMenu.jsx
// │   Breadcrumbs.jsx
// │
// ├─ components
// │   Gallery.jsx
// │   HeaderBanner.jsx
// │   Footer.jsx
// │   Modal.jsx
// │
// ├─ data
// │   galleryIndex.js
// │
// └─ utils
//     helpers.js
function validatePaths(nodes) {
  nodes.forEach(node => {
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
  { label: "Project Challenges", 
    path: "/issues", 
    type: "page",
    summary: "Pre-construction conditions that shaped the retrofit project"
   },
   
  { label: "Energy Performance", path: "energy-performance", type: "page" },

  {
    label: "Pre-retrofit",
    path: "/pre-retrofit",
    type: "section",
    summary: "The building was purchased in late 2024.",
    intro: "358 High Street is a duplex residence was built in 2004 in the back yard of what's now 360 High Street. There were numerous issues with its siting and construction. It failed to comply with zoning setbacks, site drainage was unreliable, its owners ultimately defaulted and mortgage company assumed ownership, a consent agreement was reached with the Town of Belfast to correct permitting and zoning deficiencies.",
    children: [
      { label: "Historical", path: "/pre-retrofit/historical", type: "gallery" },
    ],
  },
  {
    label: "Construction",
    path: "/construction",
    type: "section",
    summary: "A deep energy retrofit 'lite' of a conventional single-story duplex residence",
    intro: "Goals: reduce envelope thermal transmission rates, increase air tightness, add energy recovery ventilation, range hood exhaust, HVAC electrification and bulk water drainage.",
    children: [
      { label: "Envelope", 
        path: "/construction/envelope", 
        type: "section",
        children: [
         { label: "Above Grade Exterior Walls, Roof", path:"construction/envelope/der-exterior-walls-and-roof", type: "gallery" },
         { label: "Windows", path:"construction/envelope/der-windows", type: "gallery" },
         { label: "Below Grade Walls", path:"construction/envelope/der-interior-crawl-space-walls", type: "gallery" },
         { label: "Below Grade Floor", path:"construction/envelope/der-crawl-space-floors", type: "gallery" },
         { label: "Roof Interior", path:"construction/envelope/der-roof-interior", type: "gallery" }
        ]
      },
      { label: "Foundation", path: "/construction/foundation", type: "gallery",summary:"the perimeter of the original building was excavated",intro:"surface water from above the site is diverted water to either side of the building; gutters and sump pumps in the additions remove site bulk water" },
      { label: "Additions", path: "/construction/additions", type: "gallery" },
      { label: "Party Walls", path: "/construction/party-walls", type: "gallery" },
      { label: "HVAC", 
        path: "/construction/hvac", 
        type: "section",
        children: [
          {label: "HVAC Demolition",path: "/construction/hvac/mechanical-demolition",type:"gallery"},
          {label: "Ventilation",path: "/construction/hvac/erv",type:"gallery"},
          {label: "Heating and Cooling",path: "/construction/hvac/heat-pumps",type:"gallery"},
          {label: "Range Hood Exhaust",path: "/construction/hvac/kitchen-range-hood",type:"gallery"}
        ]
       }
    ],
  },
//construction/hvac/mechanical-demolition

  // {
  //construction/hvac/kitchen-range-hood
  //   label: "Occupied",
  //   path: "/occupied",
  //   type: "section",
  //   children: [
  //     { label: "Features", path: "/occupied/features", type: "gallery" },
  //     { label: "Performance", path: "/occupied/performance", type: "gallery" },
  //   ],
  // },
  { label: "About", path: "/about", type: "page",summary:"summary",intro:"intro" },

  { label: "Downloads", path: "/downloads", type: "page" },

  {
    label: "Restricted",
    path: "/restricted",
    type: "page",
  },
    {
    label: "Rental Features",
    path: "/rental", 
    type: "page",  },
  {
    label: "Rental Photos",
    path: "/rental/photos", 
    type: "gallery",  
    children:[
        { label: "Unit 1", path: "/rental/photos/unit1", type: "gallery" },
        { label: "Unit 2", path: "/rental/photos/unit2", type: "gallery" },
    ]
}
];

validatePaths(siteMap);