// src/data/energyData.js
// Pre-retrofit baseline: calendar year 2023, tenant-furnished data
// Post-retrofit: edit this data ongoing
// Unit 1 pre-retrofit kWh adjusted: deducted 3,200 kWh for plug-in Prius charging

export const energyData = {
  pre: {
    label: "Pre-Retrofit (2023)",
    area_sf: 1490,
    electricity_kwh: {
      unit1: 7223,   // adjusted: 10,023 - 2,800 EV charging
      unit2: 4018,
      total: 11241,
    },
    fueloil_gallons: 505,
    fueloil_mmbtu: 505 * 0.1385,           // 69.9 MMBTU
    electricity_mmbtu: 11241 * 0.003412,   // 38.3 MMBTU
    total_mmbtu: 108.3,
    eui_kbtu_sf_yr: 72.7,
    notes: [
      "Data furnished by previous tenants and owner; completeness cannot be fully verified.",
      "Unit 1's electric service included the shared clothes dryer and boiler plant.",
      "Consistent with three years of fuel oil delivery records at similar heating degree days.",
      "Unit 1 electricity adjusted to exclude approximately 2,800 kWh for plug-in vehicle charging.",
      "Building measured at 3.68 ACH50 — relatively air-tight for its era.",
    ],
  },
  post: {
    label: "Post-Retrofit - first year (+) of occupancy",
    area_sf: 2010,
    electricity_kwh: {
      unit1: 6936,
      unit2: 10388,
      total: 17324,
    },
    fueloil_gallons: 0,
    fueloil_mmbtu: 0,
    electricity_mmbtu: 17324 * 0.003412,   // 40.8 MMBTU
    total_mmbtu: 59.1,
    eui_kbtu_sf_yr: 29.4,
    notes: [
      "Post-retrofit data is a the first year(+) of near total occupancy.",
      "No fossil fuel consumption — building is fully electrified.",
      "Post-retrofit conditioned area includes the additions.",
      "Post-retrofit includes central cooling and continuous ventilation.",
      "Electricity consumption reflects heat pumps, ERV, and additional conditioned space.",
      "The retrofitted crawl spaces and attic are within the post construction conditioned envelope.",
      "Solar electric generation from a remote site offsets most of Unit 1's consumption.",
      "Solar PV on site was installed to serve Unit 2, Summer, 2026."
    ],
  },
  summary: {
    total_mmbtu_reduction_pct: 45,
    eui_reduction_pct: 60,
    fueloil_eliminated_gallons: 505,
    area_increase_sf: 520,
    area_increase_pct: 35,
  },
  conversions: {
    fueloil_mmbtu_per_gallon: 0.1385,
    electricity_mmbtu_per_kwh: 0.003412,
  },
};
