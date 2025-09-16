import Image from "next/image";

export const iconMap: Record<string, string> = {
  "dashboard": "/sidebarIcons/dashboard.svg",
  "inventory-management": "/sidebarIcons/Inventory.svg",
  "market-analytics": "/sidebarIcons/market-analytics.svg",
  "demand-map": "/sidebarIcons/demand-map.svg",
  "demand-analysis": "/sidebarIcons/demand-analysis.svg",
  "pricing-intelligence": "/sidebarIcons/pricing-intelligence.svg",
  "sales-velocity": "/sidebarIcons/sales-velocity.svg",
  "competitive-benchmark": "/sidebarIcons/Competitive.svg",
  "settings": "/sidebarIcons/settings.svg",
};

export const sidebarMenuItems = [
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
    path: "/",
  },
  {
    key: "inventory-management",
    icon: (
      <Image
        src={iconMap["inventory-management"]}
        alt="Inventory"
        width={32}
        height={32}
      />
    ),
    label: "Inventory",
    path: "/inventory-management",
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
    path: "/market-analytics",
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
    path: "/demand-map",
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
    path: "/demand-analysis",
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
    path: "/pricing-intelligence",
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
    path: "/sales-velocity",
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
    path: "/competitive-benchmark",
  },
  {
    key: "settings",
    icon: (
      <Image src={iconMap["settings"]} alt="Settings" width={32} height={32} />
    ),
    label: "Settings",
    path: "/settings",
  },
];
