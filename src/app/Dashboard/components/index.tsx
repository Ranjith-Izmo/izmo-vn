"use client";
import React from "react";
import { Typography } from "antd";
import CustomCard from "../../components/common/CustomCard";
import CustomRecommendationCard from "../../components/common/CustomRecommendationCard";
import DashboardGraphs from "./DashboardGraphs";

const Dashboard = () => {
  const { Title } = Typography;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridRow: 1,
          gap: "14px",
          flexWrap: "wrap",
        }}
      >
        <CustomCard
          title="Total Inventory"
          value={246}
          unit="vehicles"
          icon="/cardicons/total-inventory.svg"
          trendIcon="/cardicons/arrow-up.svg"
          trendValue="8%"
          trendText="from last week"
          trendDirection="up"
        />
        <CustomCard
          title="Vehicles Added"
          value={42}
          unit="this week"
          icon="/cardicons/vehiclesAdded.svg"
          trendIcon="/cardicons/arrow-up.svg"
          trendValue="12%"
          trendText="from previous week"
          trendDirection="up"
        />
        <CustomCard
          title="Vehicles Sold"
          value={27}
          unit="this week"
          icon="/cardicons/vehicle-sold.svg"
          trendIcon="/cardicons/arrow-down.svg"
          trendValue="3%"
          trendText="from previous week"
          trendDirection="down"
          trendColor="#F04438"
          iconColor="#E3A7B5"
        />
        <CustomCard
          title="Avg Days in Stock"
          value={38}
          unit="days"
          icon="/cardicons/avg-stock.svg"
          trendIcon="/cardicons/arrow-down.svg"
          trendValue="5%"
          trendText="days from last month"
          trendDirection="down"
          trendColor="#F04438"
          iconColor="#E3A7B5"
        />
      </div>
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
          gridTemplateColumns: "repeat(3  , 1fr)",
          gridRow: 1,
          gap: "14px",
          flexWrap: "wrap",
        }}
      >
        <CustomRecommendationCard
          icon="/cardicons/overpricedAlert.svg"
          iconBgColor="#EEEFFF"
          title="Overpriced Alert"
          titleColor="#0032B3"
          description="Review pricing for Renault Clio models. Currently 12% above market average."
        />
        <CustomRecommendationCard
          icon="/cardicons/demandAlert.svg"
          iconBgColor="#E2FFDECC"
          title="Demand Missed Alert"
          titleColor="#13B103"
          description="Peugeot 2008 is in Top 3 regional searches but missing from your inventory."
        />
        <CustomRecommendationCard
          icon="/cardicons/transfer.svg"
          iconBgColor="#FFE6E1CC"
          title="Transfer Recommendation"
          titleColor="#E33D43"
          description="Consider transferring 3 Citroën C3 units to Store B where turn rate is 25% higher."
        />
      </div>
      {/* <DashboardGraphs /> */}
      <DashboardGraphs />
    </div>
  );
};

export default Dashboard;
