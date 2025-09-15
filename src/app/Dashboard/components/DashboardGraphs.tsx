import React from "react";
import { demandInventoryData, dayInStockData } from "./dashboardData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Typography } from "antd";

const DashboardGraphs: React.FC = () => {
  return (
    <div style={{ display: "flex", gap: "24px", marginTop: "24px" }}>
      <div
        style={{
          width: "50%",
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
          }}
        >
          Demand vs Inventory Comparison
        </Typography>
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
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "5.84px",
                height: "5.84px",
                backgroundColor: "#0079FF",
                borderRadius: "100%",
              }}
            ></div>
            <div>
              <Typography
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "17.52px",
                  color: "#001940",
                }}
              >
                Demand Score
              </Typography>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "5.84px",
                height: "5.84px",
                backgroundColor: "#FFBD00",
                borderRadius: "100%",
              }}
            ></div>
            <div>
              <Typography
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "17.52px",
                  color: "#001940",
                }}
              >
                Inventory level
              </Typography>
            </div>
          </div>
        </div>

        {/* DashboardGraphs */}
        <ResponsiveContainer width="100%" height={440}>
          <BarChart
            data={demandInventoryData}
            layout="vertical"
            margin={{ left: 30, right: 20 }}
          >
            <CartesianGrid
              vertical={true}
              horizontal={false}
              stroke="#DCDDDE"
              strokeWidth={2}
            />
            <XAxis
              type="number"
              style={{
                fontSize: 12,
                fontWeight: 500,
                fill: "#565656",
                lineHeight: "18px",
              }}
            />
            <YAxis
              dataKey="name"
              type="category"
              style={{
                fontSize: 10,
                fontWeight: 700,
                fill: "#565656",
                whiteSpace: "nowrap",
                lineHeight: "15.07px",
              }}
            />
            <YAxis
              dataKey="name"
              type="category"
              tick={({ x, y, payload }) => (
                <text
                  x={x}
                  y={y}
                  textAnchor="end"
                  fill="#565656"
                  fontSize={10}
                  fontWeight={700}
                  alignmentBaseline="middle"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {payload.value.replace(/\s+/g, " ")}
                </text>
              )}
            />
            <Bar
              dataKey="demand"
              fill="#0079FF"
              name="Demand Score"
              barSize={10}
            />
            <Bar
              dataKey="inventory"
              fill="#FFBD00"
              name="Inventory level"
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 2nd graph */}
      <div
        style={{
          width: "50%",
          background: "#FFFFFF",
          borderRadius: "12px",
          padding: "20px",
          gap: "20px",
          boxShadow: "0px 1px 2px 0px #1018280D",
          border: "1px solid #DDDDDD80",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
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
            marginBottom: "40px",
          }}
        >
          Day In Stock Distribution
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dayInStockData} margin={{ left: 20, right: 20 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              dataKey="range"
              style={{
                fill: "#565656",
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "Regular",
                fontSize: "18px",
                lineHeight: "120%",
              }}
            />
            <Bar
              dataKey="value"
              fill="#2E90FA"
              barSize={80}
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardGraphs;
