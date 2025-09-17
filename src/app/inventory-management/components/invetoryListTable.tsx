import React from "react";
import { Typography, Button } from "antd";

const tableData = [
    {
        stock: "RC4522",
        make: "Renault Clio",
        variant: "Evolution Tce 90",
        type: "Hatchback, Red",
        price: "€19,450",
        days: "28 days",
        status: "Active",
    },
    {
        stock: "PC3078",
        make: "Peugeot 308",
        variant: "Allura PureTech 130",
        type: "Hatchback, Blue",
        price: "€24,750",
        days: "46 days",
        status: "Aging Stock",
    },
    {
        stock: "CA5642",
        make: "Citroën C4",
        variant: "Shine BlueHDi 130",
        type: "SUV, Orange",
        price: "€22,890",
        days: "12 days",
        status: "Active",
    },
    {
        stock: "RA7721",
        make: "Renault Arkana",
        variant: "RS Line E-Tech 145",
        type: "Hatchback, White",
        price: "€15,000",
        days: "8 days",
        status: "Active",
    },
];

const StatusPill = ({ status }: { status: string }) => {
    let color = "#259800";
    if (status === "Aging Stock") color = "#C32026";

    return (
        <div
            style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                justifyContent: "end",
                background: "#ffffff",
                color: `${color}`,
                padding: "4px 12px",
                borderRadius: "40px",
                border: `1px solid ${color}`,
                width: "fit-content",
            }}
        >
            <div
                style={{
                    width: "8.52px",
                    height: "8.52px",
                    backgroundColor: `${color}`,
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
                {status}
            </span>
        </div>
    );
};

const InventoryListTable = () => {
    return (
        <div
            style={{
                width: "100%",
                background: "#FFFFFF",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0px 1px 2px 0px #1018280D",
                border: "1px solid #DDDDDD80",
            }}
        >
            <Typography
                style={{
                    fontFamily: "Inter",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000000",
                    marginBottom: "20px",
                }}
            >
                Inventory List
            </Typography>

            <table
                style={{
                    width: "100%",
                    fontFamily: "Inter",
                    borderCollapse: "separate",
                    borderSpacing: "0 12px",
                    backgroundColor: "#FAFAFA",
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
                            fontWeight: 500,
                            fontSize: "20px",
                            lineHeight: "28px",
                        }}
                    >
                        <th
                            style={{
                                padding: "12px",
                                paddingLeft: "16px",
                                textAlign: "center",
                            }}
                        >
                            Stock #
                        </th>
                        <th style={{ padding: "12px", textAlign: "end" }}>Make/Model</th>
                        <th style={{ padding: "12px", textAlign: "end" }}>Variant</th>
                        <th style={{ padding: "12px", textAlign: "end" }}>Price</th>
                        <th style={{ padding: "12px", textAlign: "end" }}>Days in Stock</th>
                        <th style={{ padding: "12px", textAlign: "end" }}>Status</th>
                        <th style={{ padding: "12px", textAlign: "end" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, idx) => (
                        <tr
                            key={idx}
                            style={{
                                borderBottom: "1px solid #E5E5E5",
                                background: "#FAFAFA",
                            }}
                        >
                            <td
                                style={{
                                    borderRadius: "4px",
                                    height: "58px",
                                    backgroundColor: "#ffffff",
                                    padding: "8px",
                                    textAlign: "center",
                                }}
                            >
                                {row.stock}
                            </td>
                            <td
                                style={{
                                    padding: "16px",
                                    textAlign: "end",
                                    borderRadius: "4px",
                                    height: "58px",
                                    backgroundColor: "#ffffff",
                                }}
                            >
                                <div
                                    style={{
                                        fontWeight: 600,
                                        color: "#000000",
                                        textAlign: "end",
                                        paddingBottom: "6px",
                                    }}
                                >
                                    {row.make}
                                </div>
                                <div
                                    style={{
                                        fontSize: "14px",
                                        color: "#727272",
                                        textAlign: "end",
                                    }}
                                >
                                    {row.variant}
                                </div>
                            </td>
                            <td
                                style={{
                                    padding: "16px",
                                    color: "#727272",
                                    textAlign: "end",
                                    borderRadius: "4px",
                                    height: "58px",
                                    backgroundColor: "#ffffff",
                                }}
                            >
                                {row.type}
                            </td>
                            <td
                                style={{
                                    borderRadius: "4px",
                                    textAlign: "end",
                                    height: "58px",
                                    backgroundColor: "#ffffff",
                                    padding: "8px",
                                    color: "#727272",
                                }}
                            >
                                {row.price}
                            </td>
                            <td
                                style={{
                                    padding: "16px",
                                    textAlign: "end",
                                    borderRadius: "4px",
                                    height: "58px",
                                    backgroundColor: "#ffffff",
                                    color: "#727272",

                                }}
                            >
                                {row.days}
                            </td>
                            <td
                                style={{
                                    padding: "16px",
                                    display: "flex",
                                    justifyContent: "end",
                                    backgroundColor: "#ffffff",

                                }}
                            >
                                <StatusPill status={row.status} />
                            </td>
                            <td style={{ padding: "16px", textAlign: "end", backgroundColor: "#ffffff" }}>
                                <Button
                                    style={{
                                        fontWeight: 500,
                                        fontStyle: "Medium",
                                        height: "48px",
                                        fontSize: "18px",
                                        lineHeight: "26px",
                                        border: "1px solid #CCCCCC",
                                        borderRadius: "6px",
                                        padding: "10px 22px",
                                        color: "#555555",
                                    }}
                                >
                                    Edit
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div
                style={{
                    marginTop: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "14px",
                    color: "#727272",
                }}
            >
                <span>Showing 1 to 4 of 246 entries</span>
                <div style={{ display: "flex", gap: "8px" }}>
                    <Button>{"<"}</Button>
                    <Button type="primary" style={{ background: "#C32026" }}>
                        1
                    </Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>{">"}</Button>
                </div>
            </div>
        </div>
    );
};

export default InventoryListTable;
