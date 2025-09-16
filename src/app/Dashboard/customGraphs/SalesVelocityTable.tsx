import React from "react";
import { salesVelocityData } from "../../../utils/dashboardData";
import { Typography } from "antd";

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
                        borderCollapse: "separate",
                        borderSpacing: "0 12px",
                        fontFamily: "Inter",
                        fontSize: "16px",
                    }}
                >
                    <thead>
                        <tr
                            style={{
                                height: "58px",
                                background: "#EEEFFF",
                                borderRadius: "8px",
                                paddingRight: "30px",
                                textAlign: "left",
                                color: "#000000",
                                fontFamily: "Inter",
                                fontWeight: 600,
                                fontStyle: "Semi Bold",
                                fontSize: "20px",
                                lineHeight: "28px",
                            }}
                        >
                            <th style={{ width: "143px", padding: "8px", textAlign: "left" }}>
                                Model
                            </th>
                            <th style={{ width: "143px", padding: "8px", textAlign: "left" }}>
                                Turn Rate
                            </th>
                            <th style={{ width: "212px", padding: "8px", textAlign: "left" }}>
                                Avg Days in Stock
                            </th>
                            <th
                                style={{
                                    width: "143px",
                                    padding: "8px",
                                    textAlign: "end",
                                    paddingRight: "20px",
                                }}
                            >
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesVelocityData.map((row) => (
                            <tr
                                key={row.model}
                                style={{
                                    backgroundColor: "#FAFAFA",
                                    marginBottom: "12px",
                                    borderRadius: "8px",
                                    display: "table-row",
                                }}
                            >
                                <td
                                    style={{
                                        borderRadius: "4px",
                                        textAlign: "left",
                                        height: "58px",
                                        backgroundColor: "#FAFAFA",
                                        padding: "8px",
                                    }}
                                >
                                    {row.model}
                                </td>
                                <td
                                    style={{
                                        borderRadius: "4px",
                                        textAlign: "center",
                                        color: "#727272",
                                        height: "58px",
                                        backgroundColor: "#FAFAFA",
                                        padding: "8px",
                                    }}
                                >
                                    {row.turnRate}
                                </td>
                                <td
                                    style={{
                                        borderRadius: "4px",
                                        color: "#727272",
                                        textAlign: "center",
                                        height: "58px",
                                        backgroundColor: "#FAFAFA",
                                        padding: "8px",
                                    }}
                                >
                                    {row.avgDays}
                                </td>
                                <td
                                    style={{
                                        borderRadius: "4px",
                                        display: "flex",
                                        justifyContent: "end",
                                        alignItems: "center",
                                        height: "58px",
                                        backgroundColor: "#FAFAFA",
                                        padding: "8px",
                                    }}
                                >
                                    {row.status === "Fast Moving" && (
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "8px",
                                                alignItems: "center",
                                                justifyContent: "end",
                                                background: "#ffffff",
                                                color: "#259800",
                                                padding: "4px 12px",
                                                borderRadius: "40px",
                                                border: "1px solid #259800",
                                                width: "fit-content",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "8.52px",
                                                    height: "8.52px",
                                                    backgroundColor: "#259800",
                                                    borderRadius: "100%",
                                                }}
                                            ></div>
                                            <span
                                                style={{
                                                    fontWeight: 400,
                                                    fontSize: "16px",
                                                    lineHeight: "24px",
                                                }}
                                            >
                                                Fast Moving
                                            </span>
                                        </div>
                                    )}
                                    {row.status === "Average" && (
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "8px",
                                                alignItems: "center",
                                                justifyContent: "end",
                                                background: "#ffffff",
                                                color: "#F2B005",
                                                padding: "4px 12px",
                                                borderRadius: "40px",
                                                border: "1px solid #F2B005",
                                                width: "fit-content",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "8.52px",
                                                    height: "8.52px",
                                                    backgroundColor: "#F2B005",
                                                    borderRadius: "100%",
                                                }}
                                            ></div>
                                            <span
                                                style={{
                                                    fontWeight: 400,
                                                    fontSize: "16px",
                                                    lineHeight: "24px",
                                                }}
                                            >
                                                Average
                                            </span>
                                        </div>
                                    )}
                                    {row.status === "Slow Moving" && (
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "8px",
                                                alignItems: "center",
                                                justifyContent: "end",
                                                background: "#ffffff",
                                                color: "#C32026",
                                                padding: "4px 12px",
                                                borderRadius: "40px",
                                                border: "1px solid #C32026",
                                                width: "fit-content",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "8.52px",
                                                    height: "8.52px",
                                                    backgroundColor: "#C32026",
                                                    borderRadius: "100%",
                                                }}
                                            ></div>
                                            <span
                                                style={{
                                                    fontWeight: 400,
                                                    fontSize: "16px",
                                                    lineHeight: "24px",
                                                }}
                                            >
                                                Slow Moving
                                            </span>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesVelocityTable;
