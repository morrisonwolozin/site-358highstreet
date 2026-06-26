/**
 * SolarPage.jsx  —  358 High Street solar monitoring
 *
 * Sections:
 *   1. Today      — live 15-min power curve + today's accumulated kWh
 *   2. History    — period picker (7d / 30d / YTD / All) bar chart
 *   3. System     — hardcoded Revision Energy spec & economics
 *   4. Approach   — narrative prose drawn from solar.md, updated for live status
 *
 * API: same-origin /solar-api/*  (Apache proxy → server-solarpv :3003)
 * Site: 358 High Street, Belfast ME  |  commissioned 2026-06-24
 *
 * Replace SITE_ID below with the real SolarEdge numeric site ID for 358.
 */

import { useState, useEffect, useCallback } from "react";
import arrayImage from "/images/img-array.webp";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ─── constants ────────────────────────────────────────────────────────────────

const SITE_ID = "4904323";
const COMMISSION_DATE = "June 24, 2026";
const COMMISSION_ISO = "2026-06-24";

// Show graceful-degradation notice in History until this many days have elapsed
const MIN_HISTORY_DAYS = 2;

// ─── helpers ──────────────────────────────────────────────────────────────────

function fmtEnergy(kWh) {
  if (kWh == null || isNaN(kWh)) return "—";
  if (kWh >= 1000) return `${(kWh / 1000).toFixed(2)} MWh`;
  if (kWh >= 10) return `${kWh.toFixed(1)} kWh`;
  return `${kWh.toFixed(2)} kWh`;
}

function fmtPower(watts) {
  if (watts == null || isNaN(watts)) return "—";
  if (watts >= 1000) return `${(watts / 1000).toFixed(2)} kW`;
  return `${Math.round(watts)} W`;
}

function fmtTime(iso) {
  if (!iso) return "";
  // SolarEdge returns "2026-06-26 14:30:00" — replace space with T for Safari compat
  const d = new Date(iso.replace(" ", "T"));
  return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function fmtDate(dateStr) {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString([], {
    month: "short",
    day: "numeric",
  });
}

function daysSinceCommission() {
  const start = new Date(COMMISSION_ISO);
  const now = new Date();
  return Math.floor((now - start) / 86_400_000);
}

// ─── custom tooltips ──────────────────────────────────────────────────────────

function PowerTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded px-3 py-2 text-sm shadow">
      <p className="text-gray-500 mb-1">{fmtTime(label)}</p>
      <p className="font-semibold text-emerald-700">{fmtPower(payload[0]?.value)}</p>
    </div>
  );
}

function EnergyTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded px-3 py-2 text-sm shadow">
      <p className="text-gray-500 mb-1">{fmtDate(label)}</p>
      <p className="font-semibold text-emerald-700">{fmtEnergy(payload[0]?.value)}</p>
    </div>
  );
}

// ─── shared UI ────────────────────────────────────────────────────────────────

const PERIODS = [
  { key: "7d",  label: "7 days" },
  { key: "30d", label: "30 days" },
  { key: "ytd", label: "Year to date" },
  { key: "all", label: "All time" },
];

function SectionHeading({ children }) {
  return (
    <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
      {children}
    </h2>
  );
}

function StatCard({ label, value, sub }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 px-5 py-4">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">{label}</p>
      <p className="text-3xl font-bold text-emerald-700 leading-none">{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  );
}

// ─── Today section ────────────────────────────────────────────────────────────

function TodaySection() {
  const [curve, setCurve]       = useState([]);
  const [todayKwh, setTodayKwh] = useState(null);
  const [peakW, setPeakW]       = useState(null);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  const fetchToday = useCallback(async () => {
    try {
      const res = await fetch(`/solar-api/sites/${SITE_ID}/power-today`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();

      // Response is a bare array of { time, kW } objects
      const points = json.map((p) => ({
        time:  p.time,
        watts: p.kW != null ? p.kW * 1000 : 0,
      }));

      // Derive today's kWh by summing 15-min intervals (kW × 0.25 hr)
      const kwh = json.reduce((sum, p) => sum + (p.kW ?? 0) * 0.25, 0);

      setCurve(points);
      setTodayKwh(kwh);
      setPeakW(points.length ? Math.max(...points.map((p) => p.watts)) : null);
      setError(null);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchToday();
    const id = setInterval(fetchToday, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, [fetchToday]);

  const hasData = curve.some((p) => p.watts > 0);

  return (
    <section className="mb-12">
      <SectionHeading>Today</SectionHeading>

      {loading && <p className="text-gray-400 text-sm">Loading today's data…</p>}
      {error   && <p className="text-red-500 text-sm">Could not load live data: {error}</p>}

      {!loading && !error && (
        <>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <StatCard
              label="Generated today"
              value={todayKwh != null ? fmtEnergy(todayKwh) : "—"}
              sub="resets at midnight"
            />
            <StatCard
              label="Peak output"
              value={peakW != null ? fmtPower(peakW) : "—"}
              sub="system rated 8.36 kW"
            />
          </div>

          {!hasData ? (
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center text-gray-400 text-sm">
              No generation recorded yet today — check back after sunrise.
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                Power curve — 15-minute intervals
              </p>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={curve} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="solarGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor="#059669" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="time"
                    tickFormatter={fmtTime}
                    tick={{ fontSize: 11, fill: "#9ca3af" }}
                    tickLine={false}
                    axisLine={false}
                    interval="preserveStartEnd"
                  />
                  <YAxis
                    tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : v)}
                    tick={{ fontSize: 11, fill: "#9ca3af" }}
                    tickLine={false}
                    axisLine={false}
                    width={36}
                    unit=" W"
                  />
                  <Tooltip content={<PowerTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="watts"
                    stroke="#059669"
                    strokeWidth={2}
                    fill="url(#solarGrad)"
                    dot={false}
                    activeDot={{ r: 4, fill: "#059669" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}
        </>
      )}
    </section>
  );
}

// ─── Historical section ───────────────────────────────────────────────────────

function HistoricalSection() {
  const [period, setPeriod]     = useState("7d");
  const [bars, setBars]         = useState([]);
  const [totalKwh, setTotalKwh] = useState(null);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  const daysOld = daysSinceCommission();
  const tooNew  = daysOld < MIN_HISTORY_DAYS;

  const fetchHistory = useCallback(async () => {
    if (tooNew) { setLoading(false); return; }
    setLoading(true);
    try {
      const res = await fetch(`/solar-api/sites/${SITE_ID}/energy?period=${period}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();

      // Response: { range, values: [{period, kWh}, …] }
      const points = (json.values ?? []).map((p) => ({
        date: p.period,
        kwh:  p.kWh ?? 0,
      }));

      setBars(points);
      setTotalKwh(points.reduce((sum, p) => sum + (p.kwh ?? 0), 0));
      setError(null);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [period, tooNew]);

  useEffect(() => { fetchHistory(); }, [fetchHistory]);

  return (
    <section className="mb-12">
      <SectionHeading>Production history</SectionHeading>

      {tooNew ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 text-sm text-emerald-800">
          <p className="font-medium mb-1">
            Array commissioned {COMMISSION_DATE} — production history is accumulating.
          </p>
          <p className="text-emerald-600">
            Daily charts will appear here as records build up over the coming days.
          </p>
        </div>
      ) : (
        <>
          <div className="flex gap-2 mb-5">
            {PERIODS.map((p) => (
              <button
                key={p.key}
                onClick={() => setPeriod(p.key)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  period === p.key
                    ? "bg-emerald-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {totalKwh != null && (
            <p className="text-sm text-gray-500 mb-4">
              Total:{" "}
              <span className="font-semibold text-gray-800">{fmtEnergy(totalKwh)}</span>{" "}
              over this period
            </p>
          )}

          {loading && <p className="text-gray-400 text-sm">Loading…</p>}
          {error   && <p className="text-red-500 text-sm">Could not load history: {error}</p>}

          {!loading && !error && bars.length === 0 && (
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center text-gray-400 text-sm">
              No production data for this period yet.
            </div>
          )}

          {!loading && !error && bars.length > 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={bars} margin={{ top: 4, right: 8, left: 0, bottom: 0 }} barCategoryGap="30%">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                  <XAxis
                    dataKey="date"
                    tickFormatter={fmtDate}
                    tick={{ fontSize: 11, fill: "#9ca3af" }}
                    tickLine={false}
                    axisLine={false}
                    interval="preserveStartEnd"
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "#9ca3af" }}
                    tickLine={false}
                    axisLine={false}
                    width={44}
                    tickFormatter={(v) => fmtEnergy(v)}
                  />
                  <Tooltip content={<EnergyTooltip />} />
                  <Bar dataKey="kwh" fill="#059669" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </>
      )}
    </section>
  );
}

// ─── System design section ────────────────────────────────────────────────────

function SystemSection() {
  const specs = [
    { label: "System capacity",   value: "8.36 kW DC" },
    { label: "Solar modules",     value: "19 × Silfab SIL-440QD — 440 W each" },
    { label: "Inverter",          value: "SolarEdge Home Hub" },
    { label: "DC optimizers",     value: "19 × SolarEdge U650B" },
    { label: "Monitoring",        value: "SolarEdge Revenue Grade" },
    { label: "Installer",         value: "Revision Energy" },
    { label: "Commissioned",      value: COMMISSION_DATE },
  ];

  const layout = [
    { plane: "Addition roof",        panels: 6 },
    { plane: "Main roof, west half", panels: 13 },
  ];

  const economics = [
    { label: "Estimated annual production",  value: "8,034 kWh", note: "Revision Energy projection" },
    { label: "Unit 2 annual consumption",    value: "8,311 kWh", note: "pre-solar baseline" },
    { label: "Expected solar coverage",      value: "97%",       note: "" },
    { label: "Federal ITC (Section 48E)",    value: "30%",       note: "commercial investment tax credit" },
    { label: "Domestic content adder",       value: "+10%",      note: "pending qualification" },
    { label: "Tenant electricity rate",      value: "50% of CMP retail", note: "solar benefit passed to tenants" },
  ];

  return (
    <section className="mb-12">
      <SectionHeading>System design</SectionHeading>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Equipment */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <p className="text-xs uppercase tracking-widest text-gray-400 px-4 pt-4 pb-2">Equipment</p>
          <table className="w-full text-sm">
            <tbody>
              {specs.map((s) => (
                <tr key={s.label} className="border-t border-gray-100">
                  <td className="px-4 py-2.5 text-gray-500 w-2/5">{s.label}</td>
                  <td className="px-4 py-2.5 font-medium text-gray-800">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Economics */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <p className="text-xs uppercase tracking-widest text-gray-400 px-4 pt-4 pb-2">Economics</p>
          <table className="w-full text-sm">
            <tbody>
              {economics.map((e) => (
                <tr key={e.label} className="border-t border-gray-100">
                  <td className="px-4 py-2.5 text-gray-500 w-3/5">
                    <span>{e.label}</span>
                    {e.note && <span className="block text-xs text-gray-400">{e.note}</span>}
                  </td>
                  <td className="px-4 py-2.5 font-semibold text-emerald-700 text-right align-top">
                    {e.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Panel layout */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <p className="text-xs uppercase tracking-widest text-gray-400 px-4 pt-4 pb-2">
          Panel layout — two south-southeast facing roof planes, 5/12 pitch
        </p>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-t border-gray-100">
              <th className="px-4 py-2 text-left text-gray-400 font-normal">Roof plane</th>
              <th className="px-4 py-2 text-right text-gray-400 font-normal">Panels</th>
            </tr>
          </thead>
          <tbody>
            {layout.map((row) => (
              <tr key={row.plane} className="border-t border-gray-100">
                <td className="px-4 py-2.5 text-gray-700">{row.plane}</td>
                <td className="px-4 py-2.5 text-right font-medium text-gray-800">{row.panels}</td>
              </tr>
            ))}
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-2.5 font-semibold text-gray-800">Total</td>
              <td className="px-4 py-2.5 text-right font-bold text-gray-800">19</td>
            </tr>
          </tbody>
        </table>
        <p className="px-4 pb-4 pt-1 text-xs text-gray-400">
          The east half of the main roof is reserved for a future array expansion.
        </p>
      </div>
    </section>
  );
}

// ─── Narrative / approach section ─────────────────────────────────────────────
// Content drawn from solar.md, updated to reflect live status as of June 2026.

function ApproachSection() {
  return (
    <section className="mb-8">
      <SectionHeading>Solar electricity at 358 High Street</SectionHeading>

      <div className="space-y-5 text-sm text-gray-600 leading-relaxed">

        <p>
          Electricity for both dwelling units is supplied in whole or in part from solar
          photovoltaic generation. The arrangement uses two separate arrays at two locations:
          an existing offsite array in Palermo that serves Unit 1, and the onsite rooftop
          array installed in June 2026 that serves Unit 2. Tenants are billed for their
          consumption at a rate equal to{" "}
          <strong className="text-gray-800">50% of the prevailing CMP retail energy rate</strong>,
          sharing the economic benefit of solar generation while recovering a portion of
          the capital investment.
        </p>

        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-1">
            Unit 1 — offsite generation, Palermo
          </h3>
          <p>
            A 14.7 kW rooftop array located in Palermo, Maine has supplied Unit 1 since the
            building was first occupied. That array was installed prior to this project and
            generates excess production; the surplus is applied to Unit 1's consumption
            through CMP's net metering program. Under normal conditions the offsite array
            produces sufficient surplus to cover Unit 1's annual consumption. A seasonal
            shortfall occurs during winter months when reduced insolation and higher
            consumption converge; this shortfall is drawn from the grid at standard CMP rates.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold text-gray-700 mb-1">
            Unit 2 — onsite generation, 358 High Street
          </h3>
          <p>
            The 8.36 kW rooftop system was designed and installed by{" "}
            <a
              href="https://revisionenergy.com"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-700 underline underline-offset-2 hover:text-emerald-900"
            >
              Revision Energy
            </a>
            , a Maine-based, employee-owned solar contractor operating since 2003. The array
            came online on June 24, 2026 and is interconnected with CMP under net metering,
            dedicated to offsetting Unit 2's consumption. A cedar treeline on the south side
            of the property and a willow tree on the adjacent property were trimmed ahead of
            installation to improve solar access.
          </p>
          <p className="mt-3">
            Projected annual production of 8,034 kWh against a baseline consumption of
            8,311 kWh gives an expected solar coverage of approximately 97%. Net metering
            carries surplus summer production forward to offset higher winter draws from
            the grid.
          </p>
        </div>

        <p className="text-xs text-gray-400 pt-2 border-t border-gray-100">
          Production data is pulled from the SolarEdge monitoring API and refreshes every
          5 minutes. Generation figures are gross AC output. Consumption monitoring
          (CT-based) is available at this site but is not displayed here.
        </p>

      </div>
    </section>
  );
}

// ─── Page root ────────────────────────────────────────────────────────────────

export default function SolarPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">

      {/* Header — matches existing layout: image left, text right */}
      <div className="flex flex-col sm:flex-row gap-6 items-start mb-10">
        <img
          src={arrayImage}
          alt="19-panel rooftop array at 358 High Street, Belfast ME"
          className="w-full sm:w-96 rounded shadow-sm flex-shrink-0"
        />
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-gray-900">Solar Electricity</h1>
          <p className="text-gray-600">
            19-panel, 8.36 kW rooftop array across two south-southeast facing roof planes.
            Designed and installed by Revision Energy; commissioned June 24, 2026.
          </p>
          <p className="text-gray-500 text-sm">
            Live production data updates every 5 minutes via the SolarEdge API.
          </p>
        </div>
      </div>

      <TodaySection />
      <HistoricalSection />
      <SystemSection />
      <ApproachSection />

    </div>
  );
}
