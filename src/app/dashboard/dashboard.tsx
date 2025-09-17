"use client";
import React from "react";
import { Typography } from "antd";
import CustomCard from "../../components/common/customCard";
import CustomRecommendationCard from "../../components/common/customRecommendationCard";
import { dashboardCardsData, dashboardRecommendationsData } from "../../utils/dashboardData";
import DashboardGraphs from "../../components/dashboard/components/dashboardGraphs";

const Dashboard = () => {
  const { Title } = Typography;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

      {/* Header Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridRow: 1,
          gap: "14px",
          flexWrap: "wrap",
        }}
      >
        {dashboardCardsData.map((card, idx) => (
          <CustomCard key={idx} {...card} />
        ))}
      </div>

      {/* Recommendations Section */}
      <Title
        style={{
          margin: 0,
          fontWeight: "500",
          fontSize: "28px",
          lineHeight: "44px",
          color: "#000000",
        }}
      >
        Alerts & Recommendations
      </Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridRow: 1,
          gap: "14px",
          flexWrap: "wrap",
        }}
      >
        {dashboardRecommendationsData.map((rec, idx) => (
          <CustomRecommendationCard key={idx} {...rec} />
        ))}
      </div>

      {/* <DashboardGraphs /> */}
      <DashboardGraphs />
    </div>
  );
};

export default Dashboard;
