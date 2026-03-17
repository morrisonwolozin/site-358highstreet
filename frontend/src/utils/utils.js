// src/utils/useAppNavigate.js
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function toKey(label) {
  return label.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-+|-+$/g, "");
}

export function useAppNavigate() {
  const navigate = useNavigate();

  return useCallback((path) => {
    navigate(path);
  }, [navigate]);
}

// navigation/findNodeByPath.js
export function findNodeByPath(nodes, path) {
  for (const node of nodes) {
    if (node.path === path) return node;
    if (node.children) {
      const found = findNodeByPath(node.children, path);
      if (found) return found;
    }
  }
  return null;
}
