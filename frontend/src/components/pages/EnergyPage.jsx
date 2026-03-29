// src/pages/EnergyPage.jsx
import { energyData } from "../../data/energyData.js";

const { pre, post, summary } = energyData;

function MetricCard({ label, pre, post, unit, highlight = false }) {
  return (
    <div className={`rounded-lg border p-4 ${highlight ? "border-green-200 bg-green-50" : "border-gray-200 bg-white"}`}>
      <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
        {label}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-xs text-gray-500 mb-1">Before</div>
          <div className="text-xl font-semibold text-gray-800">
            {pre} <span className="text-sm font-normal text-gray-500">{unit}</span>
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">After</div>
          <div className={`text-xl font-semibold ${highlight ? "text-green-700" : "text-gray-800"}`}>
            {post} <span className="text-sm font-normal text-gray-500">{unit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryBadge({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-green-200 bg-green-50 p-2 text-center">
      <div className="text-3xl font-bold text-green-800">{value}</div>
      <div className="text-base text-gray-600 mt-1">{label}</div>
    </div>
  );
}

function NotesList({ notes }) {
  return (
    <ul className="space-y-1">
      {notes.map((note, i) => (
        <li key={i} className="flex gap-2 text-sm text-gray-600">
          <span className="text-gray-400 shrink-0">•</span>
          <span>{note}</span>
        </li>
      ))}
    </ul>
  );
}

export default function EnergyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Energy Performance</h1>
        <p className="text-gray-600">
          Whole-building energy use before and after the deep energy retrofit.
          Pre-retrofit baseline is calendar year 2023; post-retrofit consumption is based on
           partial-year data and will be updated.
        </p>
      </div>

      {/* Summary badges */}
        <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-4">
          Building Summary
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <SummaryBadge
          value={`${summary.total_mmbtu_reduction_pct}%`}
          label="Reduction in total energy use"
        />
        <SummaryBadge
          value={`${summary.fueloil_eliminated_gallons} gal`}
          label="Fuel oil eliminated annually"
        />
        <SummaryBadge
          value={`+${summary.area_increase_sf} SF`}
          label={`Conditioned area added (+${summary.area_increase_pct}%)`}
        />
      </div>

      {/* Metric cards */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-4">
          Key Metrics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <MetricCard
            label="Total Energy Use"
            pre={pre.total_mmbtu}
            post={post.total_mmbtu}
            unit="MMBTU/yr"
            highlight
          />
          <MetricCard
            label="Energy Use Intensity (EUI)"
            pre={pre.eui_kbtu_sf_yr}
            post={post.eui_kbtu_sf_yr}
            unit="kBTU/SF/yr"
            highlight
          />
          <MetricCard
            label="Electricity"
            pre={pre.electricity_kwh.total.toLocaleString()}
            post={post.electricity_kwh.total.toLocaleString()}
            unit="kWh/yr"
          />
          <MetricCard
            label="Fuel Oil"
            pre={pre.fueloil_gallons}
            post={post.fueloil_gallons}
            unit="gallons/yr"
          />
          <MetricCard
            label="Conditioned Floor Area"
            pre={pre.area_sf.toLocaleString()}
            post={post.area_sf.toLocaleString()}
            unit="SF"
          />
        </div>
      </div>

      {/* Unit breakdown */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-4">
          Electricity by Apartment Unit
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200 rounded-lg">
            <thead className="bg-gray-50 text-gray-700 font-semibold">
              <tr>
                <th className="px-4 py-2 text-left border-b border-gray-200">Unit</th>
                <th className="px-4 py-2 text-left border-b border-gray-200">Pre-Retrofit (kWh)</th>
                <th className="px-4 py-2 text-left border-b border-gray-200">Post-Retrofit (kWh)</th>
                <th className="px-4 py-2 text-left border-b border-gray-200">Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 font-medium">Unit 1</td>
                <td className="px-4 py-2">{pre.electricity_kwh.unit1.toLocaleString()}</td>
                <td className="px-4 py-2">{post.electricity_kwh.unit1.toLocaleString()}</td>
                <td className="px-4 py-2 text-green-700">
                  -{(pre.electricity_kwh.unit1 - post.electricity_kwh.unit1).toLocaleString()} kWh
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 font-medium">Unit 2</td>
                <td className="px-4 py-2">{pre.electricity_kwh.unit2.toLocaleString()}</td>
                <td className="px-4 py-2">{post.electricity_kwh.unit2.toLocaleString()}</td>
                <td className="px-4 py-2 text-red-600">
                  +{(post.electricity_kwh.unit2 - pre.electricity_kwh.unit2).toLocaleString()} kWh
                </td>
              </tr>
              <tr className="bg-gray-50 font-semibold">
                <td className="px-4 py-2">Total</td>
                <td className="px-4 py-2">{pre.electricity_kwh.total.toLocaleString()}</td>
                <td className="px-4 py-2">{post.electricity_kwh.total.toLocaleString()}</td>
                <td className="px-4 py-2 text-red-600">
                  +{(post.electricity_kwh.total - pre.electricity_kwh.total).toLocaleString()} kWh
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Unit 1 pre-retrofit figure excludes ~3,200 kWh attributed to plug-in vehicle charging.
          Unit 2 post-retrofit increase reflects heat pump heating/cooling replacing fuel oil.
        </p>
      </div>

      {/* Notes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Pre-Retrofit Notes</h3>
          <NotesList notes={pre.notes} />
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Post-Retrofit Notes</h3>
          <NotesList notes={post.notes} />
        </div>
      </div>

    </div>
  );
}
