import { Typography } from 'antd'
import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis } from 'recharts'
import { dayInStockData } from '../../../utils/dashboardData'

const StockDistributionGraph = () => {
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
                        tickLine={false}
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
    )
}

export default StockDistributionGraph