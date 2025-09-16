"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../styles/header.module.css";
import Image from "next/image";
import {
  dealerItems,
  makeitems,
  modelItems,
  searchRadiusItems,
  previousDaysItems,
} from "../../utils/menuItems";
import CustomDropdown from "../../components/customDropdown";

const Header = () => {
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState("Dashboard");
  const [mounted, setMounted] = useState(false);

  const getTitle = (path: string) => {
    const customTitles: Record<string, string> = {
      "/": "Dashboard",
      "/inventory-management": "Inventory Management",
      "/market-analytics": "Market Analytics",
      "/demand-map": "Demand Map",
      "/demand-analysis": "Demand Analysis",
      "/pricing-intelligence": "Pricing Intelligence",
      "/sales-velocity": "Sales Velocity",
      "/competitive-benchmark": "Competitive Benchmark",
      "/settings": "Settings",
    };

    const normalized = path.toLowerCase();
    // Try exact match first
    if (customTitles[normalized]) {
      return customTitles[normalized];
    }

    // Try matching by last segment
    const segments = normalized.split("/").filter(Boolean);
    if (segments.length > 0) {
      const last = "/" + segments[segments.length - 1];
      if (customTitles[last]) {
        return customTitles[last];
      }
    }

    // Fallback: prettify last segment
    if (segments.length === 0) return "Dashboard";
    return segments
      .map((seg) =>
        seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
      )
      .join(" / ");
  };

  useEffect(() => {
    setMounted(true);
    setPageTitle(getTitle(pathname));
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.headerTitle}>
          <span className={styles.headerTitleText}>
            {mounted ? pageTitle : "Dashboard"}
          </span>
        </div>
        <CustomDropdown name="Group / Dealers" items={dealerItems} bg="#fff" />
      </div>
      <div className={styles.headerDropdownRow}>
        <div className={styles.headerDropdowns}>
          {(() => {
            const excluded = [
              "/demand-map",
              "/demand-analysis",
              "/pricing-intelligence",
              "/sales-velocity"
            ];
            const current = pathname?.toLowerCase();
            if (!excluded.includes(current)) {
              return <>
                <CustomDropdown
                  name="All Makes"
                  items={makeitems}
                  bg="transparent"
                />
                <CustomDropdown
                  name="All Models"
                  items={modelItems}
                  bg="transparent"
                />
                {(current === "/market-analytics" || current === "/competitive-benchmark") && (
                  <CustomDropdown
                    name="Search Radius : 50k"
                    items={searchRadiusItems}
                    bg="transparent"
                  />
                )}
                {current === "/competitive-benchmark" && (
                  <CustomDropdown
                    name="Last 30 days"
                    items={previousDaysItems}
                    bg="transparent"
                  />
                )}
              </>;
            }
            return null;
          })()}
        </div>
        <div className={styles.headerActions}>
          {pathname?.toLowerCase() === "/inventory-management" && (
            <button className={styles.customAddImportBtn}>Add / Import</button>
          )}
          <button className={styles.customExportBtn}>
            Export
            <Image
              src="/images/export.svg"
              alt="export"
              width={26}
              height={26}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
