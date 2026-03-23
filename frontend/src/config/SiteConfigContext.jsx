// src/config/SiteConfigContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { fetchSiteConfig } from "./siteConfig";

const SiteConfigContext = createContext(null);

export function SiteConfigProvider({ children }) {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetchSiteConfig().then(setConfig);
  }, []);

  // Render nothing until config is loaded — avoids flash of wrong nav
  if (!config) return null;

  return (
    <SiteConfigContext.Provider value={config}>
      {children}
    </SiteConfigContext.Provider>
  );
}

export function useSiteConfig() {
  const config = useContext(SiteConfigContext);
  if (!config) throw new Error("useSiteConfig must be used within SiteConfigProvider");
  return config;
}
