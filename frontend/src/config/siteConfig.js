// src/config/siteConfig.js
//
// Phase 1: Static mock config.
// Phase 2: Replace this with a fetch to /api/config — all consumers stay identical.
//
// Per-unit granularity is supported now for easy future expansion:
//   units: { unit1: true, unit2: false }
// When both units are rented, set rentalAvailable: false.

export async function fetchSiteConfig() {
  // TODO: replace with fetch("/api/config") when backend is ready
  return {
    rentalAvailable: false,        // set false when both units are rented
    units: {
      unit1: false,                // set false when unit 1 is rented
      unit2: false,                // set false when unit 2 is rented
    },
  };
}
