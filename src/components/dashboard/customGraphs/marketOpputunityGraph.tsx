import { Typography } from 'antd'
import React from 'react'
import { Bar, BarChart, CartesianGrid, Cell, LabelList, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { marketOpportunityData } from '../../../utils/dashboardData'

const MarketOpputunityGraph = () => {
  return (
    <div
                style={{
                    width: "50%",
                    background: "#FFFFFF",
                    borderRadius: "12px",
                    paddingTop: "0px",
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
                        padding: "24px",
                    }}
                >
                    Market Opportunity Highlights
                </Typography>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        gap: "20px",
                        marginTop: "10px",
                    }}
                />
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
  )
}

export default MarketOpputunityGraph