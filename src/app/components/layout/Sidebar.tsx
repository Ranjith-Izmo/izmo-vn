"use client";
import React, { useState } from "react";
import Image from "next/image";

const iconMap: Record<string, string> = {
  dashboard: "/sidebarIcons/dashboard.svg",
  inventory: "/sidebarIcons/Inventory.svg",
  "market-analytics": "/sidebarIcons/market-analytics.svg",
  "demand-map": "/sidebarIcons/demand-map.svg",
  "demand-analysis": "/sidebarIcons/demand-analysis.svg",
  "pricing-intelligence": "/sidebarIcons/pricing-intelligence.svg",
  "sales-velocity": "/sidebarIcons/sales-velocity.svg",
  "competitive-benchmark": "/sidebarIcons/Competitive.svg",
  settings: "/sidebarIcons/settings.svg",
};

const menuItems = [
  {
    key: "dashboard",
    icon: (
      <Image
        src={iconMap["dashboard"]}
        alt="Dashboard"
        width={32}
        height={32}
      />
    ),
    label: "Dashboard",
  },
  {
    key: "inventory",
    icon: (
      <Image
        src={iconMap["inventory"]}
        alt="Inventory"
        width={32}
        height={32}
      />
    ),
    label: "Inventory",
  },
  {
    key: "market-analytics",
    icon: (
      <Image
        src={iconMap["market-analytics"]}
        alt="Market Analytics"
        width={32}
        height={32}
      />
    ),
    label: "Market Analytics",
  },
  {
    key: "demand-map",
    icon: (
      <Image
        src={iconMap["demand-map"]}
        alt="Demand Map"
        width={32}
        height={32}
      />
    ),
    label: "Demand Map",
  },
  {
    key: "demand-analysis",
    icon: (
      <Image
        src={iconMap["demand-analysis"]}
        alt="Demand Analysis"
        width={32}
        height={32}
      />
    ),
    label: "Demand Analysis",
  },
  {
    key: "pricing-intelligence",
    icon: (
      <Image
        src={iconMap["pricing-intelligence"]}
        alt="Pricing Intelligence"
        width={32}
        height={32}
      />
    ),
    label: "Pricing Intelligence",
  },
  {
    key: "sales-velocity",
    icon: (
      <Image
        src={iconMap["sales-velocity"]}
        alt="Sales Velocity"
        width={32}
        height={32}
      />
    ),
    label: "Sales Velocity",
  },
  {
    key: "competitive-benchmark",
    icon: (
      <Image
        src={iconMap["competitive-benchmark"]}
        alt="Competitive Benchmark"
        width={32}
        height={32}
      />
    ),
    label: "Competitive Benchmark",
  },
  {
    key: "settings",
    icon: (
      <Image src={iconMap["settings"]} alt="Settings" width={32} height={32} />
    ),
    label: "Settings",
  },
];

const Sidebar = () => {
  const [activeKey, setActiveKey] = useState(menuItems[0].key);

  return (
    <aside
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "336px",
        height: "100vh",
        background: "var(--color-sidebar-bg)",
        borderRight: "1px solid var(--color-sidebar-border)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        boxShadow: "2px 0 8px rgba(0,0,0,0.03)",
        zIndex: 200,
        paddingRight: "20px",
        paddingLeft: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          paddingTop: "40px",
          paddingBottom: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/izmoVN_logo.svg"
          alt="Logo"
          width={200}
          height={66}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "22px",
        }}
      >
        {menuItems.map((item) => {
          const isActive = item.key === activeKey;
          return (
            <div
              key={item.key}
              onClick={() => setActiveKey(item.key)}
              style={{
                display: "flex",
                gap: "20px",
                paddingBottom: "22px",
                justifyContent: "start",
                alignItems: "center",
                cursor: "pointer",
                background: isActive ? "#E53935" : "transparent",
                borderRadius: isActive ? "8px" : "0",
                padding: "8px 12px",
                color: isActive ? "#FFFFFF" : "#555555",
              }}
            >
              <Image
                src={item.icon.props.src}
                alt={item.icon.props.alt}
                width={32}
                height={32}
                style={{
                  filter: isActive
                    ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(200%)"
                    : "invert(32%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(80%)",
                  transition: "filter 0.2s",
                }}
              />
              <span
                style={{
                  fontSize: "18px",
                  lineHeight: "26px",
                  fontWeight: 400,
                  fontFamily: "inter",
                }}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
