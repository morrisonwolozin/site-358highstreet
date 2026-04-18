// src/data/energyData.js
// Pre-retrofit baseline: calendar year 2023, tenant-furnished data
// Post-retrofit: edit this data ongoing
// Unit 1 pre-retrofit kWh adjusted: deducted 3,200 kWh for plug-in Prius charging

export const energyData = {
  pre: {
    label: "Pre-Retrofit (2023)",
    area_sf: 1490,
    electricity_kwh: {
      unit1: 6826,   // adjusted: 10,023 - 3,200 EV charging
      unit2: 4018,
      total: 10844,
    },
    fueloil_gallons: 505,
    fueloil_mmbtu: 505 * 0.1385,           // 69.9 MMBTU
    electricity_mmbtu: 10844 * 0.003412,   // 37.0 MMBTU
    total_mmbtu: 106.9,
    eui_kbtu_sf_yr: 71.7,
    notes: [
      "Data furnished by previous tenants and owner; completeness cannot be fully verified.",
      "Unit 1's electric service included the shared clothes dryer and boiler plant.",
      "Consistent with three years of fuel oil delivery records at similar heating degree days.",
      "Unit 1 electricity adjusted to exclude approximately 3,200 kWh for plug-in vehicle charging.",
      "Building measured at 3.68 ACH50 — relatively air-tight for its era.",
    ],
  },
  post: {
    label: "Post-Retrofit - first year of occupancy",
    area_sf: 2010,
    electricity_kwh: {
      unit1: 6679,
      unit2: 8311,
      total: 14856,
    },
    fueloil_gallons: 0,
    fueloil_mmbtu: 0,
    electricity_mmbtu: 14990 * 0.003412,   // 40.8 MMBTU
    total_mmbtu: 51.1,
    eui_kbtu_sf_yr: 25.4,
    notes: [
      "Post-retrofit data is a the first year of near total occupancy.",
      "No fossil fuel consumption — building is fully electrified.",
      "Post-retrofit conditioned area includes additions.",
      "Electricity consumption reflects heat pumps, ERV, and additional conditioned space.",
      "The retrofitted crawl spaces and attic are within the post construction conditioned envelope.",
      "Solar electric generation from a remote site serves most of Unit 1's consumption.",
      "Solar PV on site will be installed to serve Unit 2, Summer, 2026."
    ],
  },
  summary: {
    total_mmbtu_reduction_pct: 52,
    eui_reduction_pct: 65,
    fueloil_eliminated_gallons: 505,
    area_increase_sf: 520,
    area_increase_pct: 35,
  },
  conversions: {
    fueloil_mmbtu_per_gallon: 0.1385,
    electricity_mmbtu_per_kwh: 0.003412,
  },
};
