"use client";
import { priceMarketTrendData } from "../../../utils/marketAnalyticsData";
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

const PriceMarketTrendGraph = () => {
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
        Price Trend vs Market Average (12 Month History)
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
              width: "8.21px",
              height: "8.21px",
              backgroundColor: "#0079FF",
              borderRadius: "100%",
            }}
          ></div>
          <div>
            <Typography
              style={{
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "25px",
                color: "#001940",
              }}
            >
              Your Dealership Average
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
              width: "8.21px",
              height: "8.21px",
              backgroundColor: "#818181",
              borderRadius: "100%",
            }}
          ></div>
          <div>
            <Typography
              style={{
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "25px",
                color: "#001940",
              }}
            >
              Market Average
            </Typography>
          </div>
        </div>
      </div>
      {/* Line Chart */}
      <ResponsiveContainer
        width="100%"
        height={440}
      >
        <LineChart
          data={priceMarketTrendData}
          margin={{ top: 60, right: 20, left: 20, bottom: 0 }}
        >
          <CartesianGrid
            vertical={false}
            horizontal={true}
            stroke="#8A8A8A"
            strokeWidth={0.87}
            strokeDasharray="2 2"
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            padding={{ left: 30, right: 20 }}
            style={{
              fontSize: 18,
              lineHeight: "120%",
              fontWeight: 400,
              fill: "#565656",
            }}
          />
          <YAxis
            tickLine={false}
            domain={[14000, 25000]}
            tickCount={4}
            style={{
              fontSize: 18,
              lineHeight: "120%",
              fontWeight: 400,
              fill: "#565656",
            }}
            tickFormatter={(value) => `€${value.toLocaleString()}`}
          />
          <Tooltip />
          <Line
            type="linear"
            dataKey="dealershipValue"
            dot={false}
            activeDot={false}
            stroke="#2E90FA"
            strokeWidth={2.75}
          />
          <Line
            type="linear"
            dataKey="marketValue"
            stroke="#818181"
            strokeWidth={3}
            dot={false}
            activeDot={false}
            strokeDasharray="6 6"
            strokeOpacity={0.6}
            connectNulls
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceMarketTrendGraph;
