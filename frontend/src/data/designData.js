// src/data/designData.js

export const designData = {

  thermal: {
    title: "R, Thermal Resistance Values, (ft²·°F·hr/BTU)",
    rows: [
      {
        element: "Wall, Above Grade (Original)",
        pre: 17.5,
        post: 32.3,
        remarks: "Added 2\" exterior polyiso, taped seams, and Zip sheathing.",
      },
      {
        element: "Wall, Above Grade (New Addition)",
        pre: null,
        post: 27.3,
        remarks: "2\" closed-cell SPF cavity insulation, 2\" exterior polyiso.",
      },
      {
        element: "Wall, Below Grade (Original)",
        pre: 4.0,
        post: 18.9,
        remarks: "Added 2\" continuous ccSPF to original 1\" deteriorated XPS rigid board",
      },
      {
        element: "Wall, Below Grade (New Addition)",
        pre: null,
        post: 20.4,
        remarks: "3\" ccSPF: 2\" continuous, 1\" cavity.",
      },
      {
        element: "Roof / Attic",
        pre: 36.0,
        post: 54.1,
        remarks: "Original: vented attic, 12\" fiberglass batt. Retrofit: sealed attic, 4\" ccSPF rafter cavities, 4\" exterior polyiso, 1.5\" soffit-to-ridge vent space.",
      },
      {
        element: "Floor / Crawlspace",
        pre: 0.4,
        post: 6.5,
        remarks: "Original: bare concrete. Retrofit: 0.5\" dimple mat, 1\" XPS, 0.625\" Advantech subfloor.",
      },
    ],
  },

  airLeakage: {
    title: "Air Leakage Test Results",
    pre: {
      label: "Pre-Construction",
      cfm50: 1169,
      volume_cf: 19054,
      ach50: 3.7,
      notes: "Volume includes first floor of both units only.",
    },
    post: {
      label: "Post-Retrofit",
      cfm50: 918,
      volume_cf: 31647,
      ach50: 1.7,
      notes: "Volume includes additions, conditioned crawl space, and sealed attic.",
    },
    remarks: [
      "Post-retrofit building volume is 66% larger than pre-construction, yet CFM50 was reduced by more than twenty percent.",
      "Post-retrofit ACH50 of 1.7 is exceeds Maine code for new construction (~3.0 ACH50).",
      "See Downloads page for air leakage (blower door) test reports.",
    ],
  },

  loads: {
    title: "Heating and Cooling Loads",
    pre: {
      label: "Pre-Construction",
      heating_kbtu_hr: 57.7,
      cooling_tons: 1.6,
      area_sf: 1490,
      heating_intensity_kbtu_hr_sf: 38.7,
      cooling_intensity_sf_per_ton: 931,
    },
    post: {
      label: "Post-Retrofit",
      heating_kbtu_hr: 26.9,
      cooling_tons: 1.3,
      area_sf: 2010,
      heating_intensity_kbtu_hr_sf: 13.4,
      cooling_intensity_sf_per_ton: 1546,
    },
    remarks: [
      "Loads refer to both apartments.",
      "Heating load intensity reduced 65%: from 38.7 to 13.4 kBTU/hr·SF.",
      "Cooling load per SF nearly doubled (931 → 1,546 SF/ton), meaning less cooling capacity needed per square foot.",
      "Cooling is an added electric load — the original building had no mechanical cooling.",
    ],
  },
};
