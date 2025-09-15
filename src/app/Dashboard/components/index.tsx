import CustomCard from "../../components/common/CustomCard";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridRow: 1, gap: "14px", flexWrap: "wrap" }}>
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
};

export default Dashboard;
