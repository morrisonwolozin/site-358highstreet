// src/navigation/SidebarNav.jsx
import { NavLink } from "react-router-dom";
import { siteMap } from "./siteMap";
import { useSiteConfig } from "../../config/SiteConfigContext";

function linkClass({ isActive }, level = 0) {
  return [
    "block w-full rounded-md transition-colors duration-150",
    level === 0 ? "px-3 py-2 text-sm font-semibold" : "px-3 py-1.5 text-sm",
    isActive
      ? "bg-green-100 text-green-900 border border-green-200"
      : "text-gray-700 hover:bg-green-50 hover:text-green-900",
  ].join(" ");
}

const RENTAL_PATHS = ["/rental", "/rental/photos"];

function isRentalNode(node) {
  return RENTAL_PATHS.some(
    (p) => node.path === p || node.path?.startsWith("/rental/photos/")
  );
}

function filterNodes(nodes, rentalAvailable) {
  if (rentalAvailable) return nodes;
  return nodes.filter((node) => !isRentalNode(node));
}

function TreeNode({ node, level = 0 }) {
  const hasChildren = Array.isArray(node.children) && node.children.length > 0;

  return (
    <div className="space-y-1">
      {node.path ? (
        <NavLink
          to={node.path}
          className={(navData) => linkClass(navData, level)}
          end={!hasChildren}
        >
          {node.label}
        </NavLink>
      ) : (
        <div
          className={
            level === 0
              ? "px-3 py-2 text-sm font-semibold text-gray-900"
              : "px-3 py-1.5 text-sm font-medium text-gray-800"
          }
        >
          {node.label}
        </div>
      )}
      {hasChildren && (
        <div className="ml-3 border-l border-gray-200 pl-3 space-y-1">
          {node.children.map((child) => (
            <TreeNode
              key={child.path || child.label}
              node={child}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SidebarNav() {
  const { rentalAvailable } = useSiteConfig();
  const visibleNodes = filterNodes(siteMap, rentalAvailable);

  return (
    <nav className="h-full p-4 sm:p-5 space-y-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        Navigation
      </div>
      {visibleNodes.map((node) => (
        <TreeNode key={node.path || node.label} node={node} />
      ))}
    </nav>
  );
}
