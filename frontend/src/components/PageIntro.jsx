// src/components/PageIntro.jsx
// 2026-07-06 — added optional tableData prop for before/after comparison tables
//
// tableData shape:
// {
//   caption: "Thermal R-values",
//   headers: ["Element", "Pre-Construction", "After Retrofit"],
//   rows: [
//     ["Above-grade walls", "R-17.5", "R-32.3"],
//     ["Roof", "R-38.0", "R-54.1"],
//   ]
// }
// Last column is highlighted in emerald. Omit tableData to skip the table.

import React from "react";

function IntroTable({ tableData }) {
  if (!tableData) return null;
  const { caption, headers, rows } = tableData;
  return (
    <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
      {caption && (
        <caption className="text-xs uppercase tracking-widest text-gray-400 pb-1 text-left">
          {caption}
        </caption>
      )}
      {headers && (
        <thead className="bg-gray-50">
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className={`px-4 font-medium text-gray-600 ${
                  i === 0 ? "text-left" : "text-right"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri} className="border-t border-gray-100">
            {row.map((cell, ci) => (
              <td
                key={ci}
                className={`px-4 py-1 ${
                  ci === 0
                    ? "text-gray-700"
                    : "text-center text-gray-500"
                }`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function PageIntro({ imgName, altImageName, capText, h1Text, tableData, children }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-start justify-center mb-6">
      <figure className="w-full sm:w-auto flex-shrink-0">
        <img
          src={imgName}
          alt={altImageName}
          className="sm:w-96 rounded shadow-sm flex-shrink-0 flex-col items-center"
        />
        <figcaption className="text-base italic text-gray-500 mt-4 text-center">
          {capText}
        </figcaption>
      </figure>
      <div className="text-left space-y-2 max-w-xl">
        <h1 className="text-3xl font-semibold text-gray-900">{h1Text}</h1>
        {children}
        <IntroTable tableData={tableData} />
      </div>
    </div>
  );
}
