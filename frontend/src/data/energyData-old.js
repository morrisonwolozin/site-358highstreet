// src/data/energyData.js
// Pre-retrofit baseline: calendar year 2023, tenant-furnished data
// Post-retrofit: partial year estimate, annualized
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
      "Consistent with three years of fuel oil delivery records at similar heating degree days.",
      "Unit 1 electricity adjusted to exclude approximately 3,200 kWh for plug-in vehicle charging.",
      "Building measured at 3.68 ACH50 — relatively air-tight for its era.",
    ],
  },
  post: {
    label: "Post-Retrofit (Estimated)",
    area_sf: 2010,
    electricity_kwh: {
      unit1: 5845,
      unit2: 6110,
      total: 11955,
    },
    fueloil_gallons: 0,
    fueloil_mmbtu: 0,
    electricity_mmbtu: 11955 * 0.003412,   // 40.8 MMBTU
    total_mmbtu: 40.8,
    eui_kbtu_sf_yr: 20.3,
    notes: [
      "Post-retrofit data is a partial-year estimate; figures will be updated with full annual data.",
      "No fossil fuel consumption — building is fully electrified.",
      "Post-retrofit conditioned area includes additions.",
      "Electricity consumption reflects heat pumps, ERV, and additional conditioned space.",
      "The retrofitted crawl spaces and attic are within the post construction conditioned envelope."
    ],
  },
  summary: {
    total_mmbtu_reduction_pct: 72,
    eui_reduction_pct: 72,
    fueloil_eliminated_gallons: 505,
    area_increase_sf: 520,
    area_increase_pct: 35,
  },
  conversions: {
    fueloil_mmbtu_per_gallon: 0.1385,
    electricity_mmbtu_per_kwh: 0.003412,
  },
};
