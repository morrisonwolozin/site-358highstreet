// src/data/downloads.js
// Add your actual filenames to the `file` field.
// Files should be placed in the public/downloads/ directory.

export const downloads = [
  {
    category: "Construction",
    items: [
      {
        title: "Construction Drawings",
        description: "Full set of architectural drawings for the retrofit project.",
        file: "construction-drawings.pdf",
      },
      {
        title: "Foundation Waterproofing Spec",
        description: "Specification for perimeter excavation and waterproofing system.",
        file: "foundation-waterproofing-spec.pdf",
      },
      {
        title: "Party Wall Assembly",
        description: "Details for the insulated double wall construction between units.",
        file: "party-wall-assembly.pdf",
      },
    ],
  },
  {
    category: "Energy & Mechanical",
    items: [
      {
        title: "Air Leakage Test Report",
        description: "Blower door test results — pre- and post-retrofit.",
        file: "air-leakage-test.pdf",
      },
      {
        title: "Heat Pump Equipment Schedule",
        description: "Model numbers, specifications and locations for all heat pump equipment.",
        file: "heat-pump-schedule.pdf",
      },
      {
        title: "ERV Specifications",
        description: "Energy recovery ventilator model and installation details for each unit.",
        file: "erv-specs.pdf",
      },
    ],
  },
  {
    category: "Site & Permits",
    items: [
      {
        title: "Building Permit",
        description: "Issued building permit for the renovation.",
        file: "building-permit.pdf",
      },
      {
        title: "Site Plan",
        description: "Site grading and drainage plan including parking area.",
        file: "site-plan.pdf",
      },
    ],
  },
  {
    category: "Legal & Financial",
    items: [
      {
        title: "Lease Agreement — Unit 1",
        description: "Standard lease for Unit 1.",
        file: "lease-unit1.pdf",
      },
      {
        title: "Lease Agreement — Unit 2",
        description: "Standard lease for Unit 2.",
        file: "lease-unit2.pdf",
      },
    ],
  },
];
