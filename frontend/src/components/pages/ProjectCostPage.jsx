// src/pages/ProjectCostPage.jsx
import { projectCostData } from "../../data/projectCostData";

const { totalCost, systems } = projectCostData;

function formatCost(amount) {
  return amount === 0
    ? "—"
    : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount);
}

function systemTotal(items) {
  return items.reduce((sum, item) => sum + item.cost, 0);
}

function CostTable({ items }) {
  const total = systemTotal(items);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border border-gray-200 rounded-lg">
        <thead className="bg-gray-50 text-gray-700 font-semibold">
          <tr>
            <th className="px-4 py-2 text-left border-b border-gray-200">Contractor / Trade</th>
            <th className="px-4 py-2 text-left border-b border-gray-200">Description</th>
            <th className="px-4 py-2 text-right border-b border-gray-200">Cost</th>
            <th className="px-4 py-2 text-left border-b border-gray-200">Notes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-gray-700">
          {items.map((item, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="px-4 py-2 font-medium">{item.contractor}</td>
              <td className="px-4 py-2">{item.description}</td>
              <td className="px-4 py-2 text-right tabular-nums">{formatCost(item.cost)}</td>
              <td className="px-4 py-2 text-gray-500 text-xs">{item.notes}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-50 font-semibold border-t border-gray-200">
            <td className="px-4 py-2" colSpan={2}>Subtotal</td>
            <td className="px-4 py-2 text-right tabular-nums">{formatCost(total)}</td>
            <td />
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function SystemSection({ system, items }) {
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1">
        {system}
      </h2>
      <CostTable items={items} />
    </section>
  );
}

export default function ProjectCostPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Project Costs - Coming Soon</h1>
        <p className="text-gray-600">
          Final costs for the 2025 deep energy retrofit, organized by building system.
        </p>
      </div>

   {/* reinsert output code here */}

    </div>
  );
}
