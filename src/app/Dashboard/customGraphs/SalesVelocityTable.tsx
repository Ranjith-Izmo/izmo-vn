import React from 'react'
import { salesVelocityData } from '../../utils/dashboardData'
import { Typography } from 'antd'

const SalesVelocityTable = () => {
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
                    Sales Velocity & Aging
                </Typography>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "end",
                        paddingTop: "24px",
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
                            {salesVelocityData.map((row) => (
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
  )
}

export default SalesVelocityTable