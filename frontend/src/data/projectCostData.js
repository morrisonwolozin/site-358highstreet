// src/data/projectCostData.js
// Placeholder data — replace with actual figures from Excel pivot table
// Structure mirrors pivot table output: systems → line items

export const projectCostData = {
  totalCost: 0, // replace with actual total

  systems: [
    {
      system: "Site Work & Foundation",
      items: [
        { contractor: "Dube Construction LLC",  description: "Excavation, site drainage, walkways", cost: 0, notes: "" },
        { contractor: "MacDonald Concrete",      description: "Foundation work",                    cost: 0, notes: "" },
        { contractor: "GoodDeeds",               description: "Surveying",                          cost: 0, notes: "" },
        { contractor: "Maine Raised Gardens",    description: "Raised garden beds",                 cost: 0, notes: "" },
      ],
    },
    {
      system: "Structure & Envelope",
      items: [
        { contractor: "Northridge Construction LLC", description: "General contracting",              cost: 0, notes: "" },
        { contractor: "Maple Knoll Builders LLC",    description: "Carpentry, exterior insulation",   cost: 0, notes: "" },
        { contractor: "N.E. Spray Foam",             description: "Spray foam insulation",            cost: 0, notes: "" },
        { contractor: "Rainwater Solutions",         description: "Roof gutters",                     cost: 0, notes: "" },
      ],
    },
    {
      system: "HVAC & Ventilation",
      items: [
        { contractor: "October Engineering LLC", description: "HVAC design, ERV installation",    cost: 0, notes: "" },
        { contractor: "Dave's Heat Pumps",       description: "Heat pump systems installation",   cost: 0, notes: "" },
      ],
    },
    {
      system: "Electrical",
      items: [
        { contractor: "Kenney and Gray LLC", description: "Electrical", cost: 0, notes: "" },
      ],
    },
    {
      system: "Plumbing",
      items: [
        { contractor: "Larrabee Plumbing", description: "Plumbing", cost: 0, notes: "" },
      ],
    },
    {
      system: "Finishes & Interiors",
      items: [
        { contractor: "Manson Wall",  description: "Drywall",        cost: 0, notes: "" },
        { contractor: "Niess Tile",   description: "Bathroom tile",  cost: 0, notes: "" },
      ],
    },
    {
      system: "Design & Professional Services",
      items: [
        { contractor: "Maines Design",             description: "Design consultant",      cost: 0, notes: "" },
        { contractor: "Maine Blower Door Testing", description: "Air leakage testing",    cost: 0, notes: "" },
      ],
    },
  ],
};
