// src/pages/ProjectCostPage.jsx
import { projectCostData } from "../../data/projectCostData";

const { totalCost, totalArea, purchaseCost, systems } = projectCostData;

function formatCost(amount) {
  if (!amount) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function CostTable({ items }) {
  const totals = items.reduce(
    (acc, item) => ({
      labor:   acc.labor   + (item.labor   || 0),
      material:acc.material+ (item.material|| 0),
      turnkey: acc.turnkey + (item.turnkey || 0),
      total:   acc.total   + (item.total   || 0),
    }),
    { labor: 0, material: 0, turnkey: 0, total: 0 }
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border border-gray-200 rounded-lg">
        <thead className="bg-gray-50 text-gray-700 font-semibold">
          <tr>
            <th className="px-4 py-2 text-left border-b border-gray-200">Component</th>
            <th className="px-4 py-2 text-left border-b border-gray-200">Description</th>
            <th className="px-4 py-2 text-right border-b border-gray-200">Labor</th>
            <th className="px-4 py-2 text-right border-b border-gray-200">Material</th>
            <th className="px-4 py-2 text-right border-b border-gray-200">Turnkey</th>
            <th className="px-4 py-2 text-right border-b border-gray-200">Total</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-gray-700">
          {items.map((item, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="px-4 py-2 font-medium">{item.component}</td>
              <td className="px-4 py-2 text-gray-600">{item.description}</td>
              <td className="px-4 py-2 text-right tabular-nums">{formatCost(item.labor)}</td>
              <td className="px-4 py-2 text-right tabular-nums">{formatCost(item.material)}</td>
              <td className="px-4 py-2 text-right tabular-nums">{formatCost(item.turnkey)}</td>
              <td className="px-4 py-2 text-right tabular-nums font-medium">{formatCost(item.total)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-50 font-semibold border-t-2 border-gray-300">
            <td className="px-4 py-2" colSpan={2}>Subtotal</td>
            <td className="px-4 py-2 text-right tabular-nums">{formatCost(totals.labor)}</td>
            <td className="px-4 py-2 text-right tabular-nums">{formatCost(totals.material)}</td>
            <td className="px-4 py-2 text-right tabular-nums">{formatCost(totals.turnkey)}</td>
            <td className="px-4 py-2 text-right tabular-nums font-bold">{formatCost(totals.total)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function SystemSection({ system, labor, material, turnkey, total, items }) {
  return (
    <section className="space-y-2">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-1">
        <h2 className="text-lg font-semibold text-gray-800">{system}</h2>
        <span className="text-sm font-semibold text-gray-500 tabular-nums">
          {formatCost(total)}
        </span>
      </div>
      <CostTable items={items} />
    </section>
  );
}

export default function ProjectCostPage() {
  const grandTotals = systems.reduce(
    (acc, s) => ({
      labor:   acc.labor   + (s.labor   || 0),
      material:acc.material+ (s.material|| 0),
      turnkey: acc.turnkey + (s.turnkey || 0),
    }),
    { labor: 0, material: 0, turnkey: 0 }
  );

  return (
    <div className="max-w-5xl mx-auto space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-gray-800">
          Final costs for the 2025 deep energy retrofit, organized by building system.
        </h1>
      </div>

      {/* Total badge */}
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 space-y-4">
        <div  className="border-b border-green-200">
          <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Purchase Cost
          </div>
          <div className="text-2xl font-bold text-green-700 mb-4 ">
            {formatCost(purchaseCost)}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Total Construction Cost
            </div>
            <div className="text-2xl font-bold text-green-700 mt-1">
              {formatCost(totalCost)}
            </div>
            <div className="text-xl font-bold text-green-700 mt-1">
              {formatCost(totalCost / totalArea )} per Square Foot
            </div>
          </div>

          <div className="text-sm text-gray-500 max-w-sm text-right">
            Includes all construction, design, owner-supplied materials and professional services.
            Excludes property purchase and owner labor.
          </div>
        </div>
        {/* Labor / Material / Turnkey summary */}
        <div className="grid grid-cols-3 gap-4 pt-2 border-t border-green-200">
          {[
            { label: "Labor",    value: grandTotals.labor   },
            { label: "Material", value: grandTotals.material },
            { label: "Turnkey",  value: grandTotals.turnkey  }
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</div>
              <div className="text-lg font-bold text-green-700 tabular-nums">{formatCost(value)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Systems */}
      {systems.map((s) => (
        <SystemSection
          key={s.system}
          system={s.system}
          labor={s.labor}
          material={s.material}
          turnkey={s.turnkey}
          total={s.total}
          items={s.items}
        />
      ))}

    </div>
  );
}
