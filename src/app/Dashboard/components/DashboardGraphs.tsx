import React from "react";
import DemandGraph from "../customGraphs/demandGraph";
import StockDistributionGraph from "../customGraphs/stockDistributionGraph";
import MarketOpputunityGraph from "../customGraphs/marketOpputunityGraph";
import SalesVelocityTable from "../customGraphs/salesVelocityTable";

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
