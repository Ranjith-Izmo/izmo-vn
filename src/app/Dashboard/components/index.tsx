import CustomCard from "../../components/common/CustomCard";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridRow: 1, gap: "14px", flexWrap: "wrap" }}>
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
        />
      </div>
    </div>
  );
};

export default Dashboard;
