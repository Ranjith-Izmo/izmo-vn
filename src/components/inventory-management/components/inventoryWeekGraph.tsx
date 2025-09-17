"use client";
import { inventoryLevelData } from "@/utils/inventoryData";
import { Typography } from "antd";
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const InventoryWeekGraph = () => {
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
        Inventory Level by Week
      </Typography>

      {/* Line Chart */}
      <ResponsiveContainer
        style={{ background: "#F8F9FA" }}
        width="100%"
        height={440}
      >
        <LineChart
          data={inventoryLevelData}
          margin={{ top: 80, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            vertical={false}
            horizontal={true}
            stroke="#8A8A8A"
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="week"
            tickLine={false}
            axisLine={false}
            padding={{ left: 30, right: 20 }}
            style={{
              fontSize: 12,
              fontWeight: 500,
              fill: "#565656",
            }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            domain={["dataMin - 5", "dataMax + 5"]}
            style={{
              fontSize: 12,
              fontWeight: 500,
              fill: "#565656",
            }}
          />
          <Tooltip />
          <Line
            type="linear"
            dataKey="value"
            stroke="#2E90FA"
            strokeWidth={2.75}
            dot={{ r: 4, fill: "#2E90FA" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InventoryWeekGraph;
