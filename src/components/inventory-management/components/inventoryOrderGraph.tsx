"use client"
import { Typography } from 'antd'
import React from 'react'
import { demandInventoryData } from '../../../utils/dashboardData'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const InventoryOrderGraph = () => {
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
        Inventory by Model
      </Typography>

      {/* DashboardGraphs */}
      <ResponsiveContainer width="100%" height={440}>
        <BarChart
          data={demandInventoryData}
          layout="vertical"
          margin={{ left: 42, right: 20 }}
        >
          <CartesianGrid
            vertical={true}
            horizontal={false}
            stroke="#DCDDDE"
            strokeWidth={1}
          />
          <XAxis
            tickLine={false}
            type="number"
            axisLine={false}
            domain={[0, 800]}
            ticks={[0, 100, 200, 300, 400, 500, 600, 700, 800]}
            style={{
              fontSize: 12,
              fontWeight: 500,
              fill: "#565656",
              lineHeight: "18px",
            }}
          />
          <YAxis
            tickLine={false}
            dataKey="name"
            type="category"
            style={{
              fontSize: 10,
              fontWeight: 500,
              fill: "#565656",
              whiteSpace: "nowrap",
              lineHeight: "15.07px",
            }}
          />
          <YAxis
            tickLine={false}
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
            fill="#2E90FA"
            name="Demand Score"
            barSize={5}
          />

        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default InventoryOrderGraph