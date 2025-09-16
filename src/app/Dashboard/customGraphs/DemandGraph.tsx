import { Typography } from 'antd'
import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { demandInventoryData } from '../../../utils/dashboardData'

const DemandGraph = () => {
  return (
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
                domain={[0, 800]}
                ticks={[0, 100,200,300, 400,500, 600,700, 800]}
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
                  fontWeight: 700,
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
  )
}

export default DemandGraph