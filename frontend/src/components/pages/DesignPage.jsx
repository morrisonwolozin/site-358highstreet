// src/pages/DesignPage.jsx
import { designData } from "../../data/designData";
import MarkdownPage from "./MarkdownPage";
import narrative from "../../content/design-narrative.md?raw";
import designPageImage from "/images/designPage-image.webp"


const { thermal, airLeakage, loads } = designData;

function SectionHeader({ title }) {
  return (
    <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-4">
      {title}
    </h2>
  );
}

function RemarksList({ remarks }) {
  return (
    <ul className="mt-3 space-y-1">
      {remarks.map((r, i) => (
        <li key={i} className="flex gap-2 text-sm text-gray-600">
          <span className="text-gray-400 shrink-0">•</span>
          <span>{r}</span>
        </li>
      ))}
    </ul>
  );
}

function ThermalTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border border-gray-200 rounded-lg">
        <thead className="bg-gray-50 text-gray-700 font-semibold">
          <tr>
            <th className="px-4 py-2 text-left border-b border-gray-200">Element</th>
            <th className="px-4 py-2 text-left border-b border-gray-200">Pre (R-value)</th>
            <th className="px-4 py-2 text-left border-b border-gray-200">Post (R-value)</th>
            <th className="px-4 py-2 text-left border-b border-gray-200">Remarks</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-gray-700">
          {thermal.rows.map((row) => (
            <tr key={row.element} className="hover:bg-gray-50">
              <td className="px-4 py-2 font-medium">{row.element}</td>
              <td className="px-4 py-2">
                {row.pre !== null ? row.pre : (
                  <span className="text-gray-400 italic">new</span>
                )}
              </td>
              <td className="px-4 py-2 text-green-700 font-semibold">{row.post}</td>
              <td className="px-4 py-2 text-gray-500 text-xs">{row.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AirLeakageSection() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[airLeakage.pre, airLeakage.post].map((period) => (
          <div
            key={period.label}
            className="rounded-lg border border-gray-200 p-4 space-y-3"
          >
            <div className="text-sm font-semibold text-gray-700">{period.label}</div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{period.ach50}</div>
                <div className="text-xs text-gray-500 mt-0.5">ACH50</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">
                  {period.cfm50.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">CFM50</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">
                  {period.volume_cf.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">Volume (CF)</div>
              </div>
            </div>
            <div className="text-xs text-gray-500 border-t border-gray-100 pt-2">
              {period.notes}
            </div>
          </div>
        ))}
      </div>
      <RemarksList remarks={airLeakage.remarks} />
    </div>
  );
}

function LoadsSection() {
  const rows = [
    {
      metric: "Heating Load",
      unit: "kBTU/hr",
      pre: loads.pre.heating_kbtu_hr,
      post: loads.post.heating_kbtu_hr,
      lowerIsBetter: true,
    },
    {
      metric: "Cooling Load",
      unit: "Tons",
      pre: loads.pre.cooling_tons,
      post: loads.post.cooling_tons,
      lowerIsBetter: true,
    },
    {
      metric: "Conditioned Area",
      unit: "SF",
      pre: loads.pre.area_sf.toLocaleString(),
      post: loads.post.area_sf.toLocaleString(),
      lowerIsBetter: false,
    },
    {
      metric: "Heating Intensity",
      unit: "kBTU/hr·SF",
      pre: loads.pre.heating_intensity_kbtu_hr_sf,
      post: loads.post.heating_intensity_kbtu_hr_sf,
      lowerIsBetter: true,
    },
    {
      metric: "Cooling Intensity",
      unit: "SF/Ton",
      pre: loads.pre.cooling_intensity_sf_per_ton.toLocaleString(),
      post: loads.post.cooling_intensity_sf_per_ton.toLocaleString(),
      lowerIsBetter: false,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200 rounded-lg">
          <thead className="bg-gray-50 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-200">Metric</th>
              <th className="px-4 py-2 text-left border-b border-gray-200">Units</th>
              <th className="px-4 py-2 text-left border-b border-gray-200">Pre-Construction</th>
              <th className="px-4 py-2 text-left border-b border-gray-200">Post-Retrofit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {rows.map((row) => (
              <tr key={row.metric} className="hover:bg-gray-50">
                <td className="px-4 py-2 font-medium">{row.metric}</td>
                <td className="px-4 py-2 text-gray-500">{row.unit}</td>
                <td className="px-4 py-2">{row.pre}</td>
                <td className={`px-4 py-2 font-semibold ${
                  row.lowerIsBetter ? "text-green-700" : "text-blue-700"
                }`}>
                  {row.post}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <RemarksList remarks={loads.remarks} />
    </div>
  );
}

export default function DesignPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">

      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <img
          src={designPageImage}
          alt="design page image"
          className="w-full sm:w-96 rounded shadow-sm flex-shrink-0"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-gray-900">Building Design</h1>
          <p className="text-gray-600">
            The design scope addressed the building's physical and functional deficiencies, added new spaces, and delivered a deep energy retrofit "lite". The project goals were to offer a superior tenant experience through complete separation of all functions and utilities, low utility operating expenses and good indoor air quality. And provide ongoing monitoring of indoor air quality.
          </p>
        </div>
      </div>

      {/* Markdown narrative */}
      <MarkdownPage content={narrative} />

      {/* Thermal */}
      <section>
        <SectionHeader title={thermal.title} />
        <ThermalTable />
      </section>

      {/* Air Leakage */}
      <section>
        <SectionHeader title={airLeakage.title} />
        <AirLeakageSection />
      </section>

      {/* Loads */}
      <section>
        <SectionHeader title={loads.title} />
        <LoadsSection />
      </section>

    </div>
  );
}
