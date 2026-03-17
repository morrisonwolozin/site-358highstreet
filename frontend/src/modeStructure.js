// modeStructure.js
// these are the menu modes for construction information

export const modeStructure = {
  "Original": {
    sub: ["Historical", "Photos", "Performance"]
  },
  "Construction": {
    sub: [
      "Envelope",
      "Foundation",
      "Additions",
      "Party Walls",
      "HVAC",
      "Issues",
      "Downloads"
    ],
    subSub: {     // optional third tier by sub-mode:
      "Envelope": [
        "DER Windows",
        "DER Exterior Walls and Roof",
        "DER Interior Roof",
        "DER Interior Crawl Space Walls",
        "DER Crawl Space Floors"
      ],
      "HVAC": [
        "Mechanical Demolition",
        "ERV", 
        "Heat Pumps", 
        "Kitchen Range Hood", 
        "HP DHWH"
      ]
    }
  },
  "Occupied": { sub: ["Features", "Performance"] },
  "Restricted": { sub: ["Op. Manual", "Utilities", "Air Quality"] },
  "About": { sub: ["Narrative", "Contact"] },


    "Rental Info": {
   //  sub: ["Overview"] , "Unit Details", "Utilities & Costs"
  
    // subSub: {
    //   "Unit Details": ["Unit A", "Unit B"],
    //   "Utilities & Costs": ["Typical Usage", "Billing & Providers"]
    // }
  }
};