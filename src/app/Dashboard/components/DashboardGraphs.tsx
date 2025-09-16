import React from "react";
import DemandGraph from "../customGraphs/DemandGraph";
import StockDistributionGraph from "../customGraphs/StockDistributionGraph";
import MarketOpputunityGraph from "../customGraphs/MarketOpputunityGraph";
import SalesVelocityTable from "../customGraphs/SalesVelocityTable";

const DashboardGraphs: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <div style={{ display: "flex", gap: "40px" }}>
        <DemandGraph />
        <StockDistributionGraph />
      </div>
      <div style={{ display: "flex", gap: "40px" }}>
        <MarketOpputunityGraph />
        <SalesVelocityTable />
      </div>
    </div>
  );
};

export default DashboardGraphs;
