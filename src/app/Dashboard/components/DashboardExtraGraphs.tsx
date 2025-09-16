import React from "react";
import { marketOpportunityData, salesVelocityData } from "./dashboardExtraData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
  LabelList,
} from "recharts";
import { Typography } from "antd";

const DashboardExtraGraphs: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        marginTop: "20px",
        height: "510px",
      }}
    >
      {/* Market Opportunity Highlights */}
      <div
        style={{
          width: "50%",
          background: "#FFFFFF",
          borderRadius: "12px",
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
            padding: "24px",
          }}
        >
          Day In Stock Distribution
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <ResponsiveContainer width="100%" height={420}>
          <BarChart
            data={marketOpportunityData}
            margin={{ left: 0, right: 20, bottom: 24, top: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={false}
            />
            <YAxis
              dataKey="value"
              domain={[0, 100]}
              tickLine={false}
              axisLine={false}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              style={{
                fontSize: 12.8,
                fill: "#565656",
                fontWeight: 400,
                lineHeight: "120%",
                letterSpacing: 0,
                textAlign: "center",

              }}
            />
            <XAxis
              tickLine={false}
              dataKey="name"
              style={{
                fill: "#565656",
                fontFamily: "Inter",
                fontWeight: 400,
                fontStyle: "Regular",
                fontSize: "12.8px",
                lineHeight: "120%",
              }}
            />
            <Bar dataKey="value" barSize={80} radius={[6, 6, 0, 0]}>
              {marketOpportunityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <LabelList
                dataKey="value"
                position="top"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "14.4px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Sales Velocity & Aging */}
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "24px",
          flex: 1,
          boxShadow: "0px 1px 2px 0px #1018280D",
          border: "1px solid #E3E8EF",
        }}
      >
        <h3 style={{ margin: "0 0 16px 0" }}>Sales Velocity & Aging</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "end",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontFamily: "Inter",
              fontSize: "16px",
            }}
          >
            <thead>
              <tr style={{ background: "#F5F6FA" }}>
                <th
                  style={{ padding: "8px", textAlign: "left", color: "#333" }}
                >
                  Model
                </th>
                <th
                  style={{ padding: "8px", textAlign: "left", color: "#333" }}
                >
                  Turn Rate
                </th>
                <th
                  style={{ padding: "8px", textAlign: "left", color: "#333" }}
                >
                  Avg Days in Stock
                </th>
                <th
                  style={{ padding: "8px", textAlign: "left", color: "#333" }}
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {salesVelocityData.map((row, idx) => (
                <tr
                  key={row.model}
                  style={{ borderBottom: "1px solid #F0F0F0" }}
                >
                  <td style={{ padding: "8px" }}>{row.model}</td>
                  <td style={{ padding: "8px" }}>{row.turnRate}</td>
                  <td style={{ padding: "8px" }}>{row.avgDays}</td>
                  <td style={{ padding: "8px" }}>
                    {row.status === "Fast Moving" && (
                      <span
                        style={{
                          background: "#E6F9F0",
                          color: "#12B76A",
                          padding: "4px 12px",
                          borderRadius: "16px",
                          fontWeight: 600,
                          fontSize: "14px",
                        }}
                      >
                        ● Fast Moving
                      </span>
                    )}
                    {row.status === "Average" && (
                      <span
                        style={{
                          background: "#FFF7E6",
                          color: "#FF9800",
                          padding: "4px 12px",
                          borderRadius: "16px",
                          fontWeight: 600,
                          fontSize: "14px",
                        }}
                      >
                        ● Average
                      </span>
                    )}
                    {row.status === "Slow Moving" && (
                      <span
                        style={{
                          background: "#FFE6E6",
                          color: "#F04438",
                          padding: "4px 12px",
                          borderRadius: "16px",
                          fontWeight: 600,
                          fontSize: "14px",
                        }}
                      >
                        ● Slow Moving
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardExtraGraphs;
