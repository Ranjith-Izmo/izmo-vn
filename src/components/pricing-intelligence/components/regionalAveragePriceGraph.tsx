"use client";
import { topModelsVolumeGraphData } from "@/utils/demandAnalysisData";
import { Typography } from "antd";
import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Bar,
} from "recharts";

const RegionalAveragePriceGraph = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "#FFFFFF",
        borderRadius: "12px",
        padding: "20px",
        gap: "20px",
        boxShadow: "0px 1px 2px 0px #1018280D",
        border: "1px solid #DDDDDD80",
      }}
    >
      <Typography
        style={{
          fontFamily: "Inter",
          fontWeight: 500,
          fontStyle: "Medium",
          fontSize: "24px",
          lineHeight: "100%",
          color: "#000000",
          paddingBottom: "30px",
        }}
      >
        Yours Price vs Regional Average
      </Typography>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          gap: "20px",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#0079FF",
              borderRadius: "50%",
            }}
          ></div>
          <Typography style={{ fontSize: "18px", color: "#001940" }}>
            Your Price
          </Typography>
        </div>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#818181",
              borderRadius: "50%",
            }}
          ></div>
          <Typography style={{ fontSize: "18px", color: "#001940" }}>
            Regional Average
          </Typography>
        </div>
      </div>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={440}>
        <BarChart
          data={topModelsVolumeGraphData}
          margin={{ top: 40, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            vertical={false}
            stroke="#8A8A8A"
            strokeWidth={0.87}
            strokeDasharray="2 2"
          />
          <XAxis
            dataKey="model"
            tickLine={false}
            padding={{ left: 20, right: 20 }}
            style={{
              fontSize: 18,
              fontWeight: 400,
              fill: "#565656",
            }}
             tick={{
              textAnchor: "middle",
              dy: 5,
            }}
          />
          <YAxis
            domain={[0, 30]}
            ticks={[0, 5, 10, 15, 20, 25, 30]}
            tickLine={false}
            style={{
              fontSize: 18,
              fontWeight: 400,
              fill: "#565656",
              lineHeight: "120%",
            }}
            tick={{
              textAnchor: "middle",
              dx: -30,
            }}
            tickFormatter={(value) => `€${value.toLocaleString()}k`}
          />
          <Bar
            dataKey="searchVolume"
            barSize={40}
            name="Search Volume"
            fill="#2E90FA"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="inventory"
            barSize={40}
            name="Your Inventory"
            fill="#B5D9FF"
            radius={[6, 6, 0, 0]}
          />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RegionalAveragePriceGraph;
