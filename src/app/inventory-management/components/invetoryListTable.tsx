import React from "react";
import { Typography, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { inventoryListTableData } from "../../../utils/inventoryData";

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
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontStyle: "Medium",
            fontSize: "28px",
            lineHeight: "100%",
            color: "#000000",
          }}
        >
          Inventory List
        </Typography>
        <div
          style={{
            height: "58px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "24px",
          }}
        >
          <button
            style={{
              borderRadius: "6px",
              fontSize: "18px",
              fontWeight: "500",
              padding: "10px 20px",
              lineHeight: "26px",
              fontFamily: "Inter",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              backgroundColor: "#E53935",
              color: "#FFFFFF",
              border: "none",
            }}
          >
            Inventory Rules
          </button>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          borderRadius: "12px",
          gap: "22px",
          paddingRight: "24px",
          boxShadow: "0px 1px 2px 0px #1018280D",
        }}
      >
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
              <th style={{ padding: "12px", textAlign: "end" }}>
                Days in Stock
              </th>
              <th style={{ padding: "12px", textAlign: "end" }}>Status</th>
              <th style={{ padding: "12px", textAlign: "end" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventoryListTableData.map((row, idx) => (
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
                <td
                  style={{
                    padding: "16px",
                    textAlign: "end",
                    backgroundColor: "#ffffff",
                  }}
                >
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
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "28px",
            color: "#727272",
          }}
        >
          <span>Showing 1 to 4 of 246 entries</span>
          <div style={{ display: "flex", gap: "10px" }}>
            <div
              style={{
                width: "49px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #CCCCCC",
                color: "#000000",
                borderRadius: "6px",
              }}
            >
              <LeftOutlined
                style={{ width: "24px", height: "24px", color: "#000000" }}
              />
            </div>
            <Button
              style={{
                width: "49px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #CCCCCC",
                color: "#555555",
                borderRadius: "6px",
                fontWeight: "500",
                fontStyle: "Medium",
                fontSize: "18px",
                lineHeight: "26px",
                backgroundColor: "#ffffff",
              }}
            >
              1
            </Button>
            <Button
              style={{
                width: "49px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #CCCCCC",
                color: "#555555",
                borderRadius: "6px",
                fontWeight: "500",
                fontStyle: "Medium",
                fontSize: "18px",
                lineHeight: "26px",
                backgroundColor: "#ffffff",
              }}
            >
              2
            </Button>
            <Button
              style={{
                width: "49px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #CCCCCC",
                color: "#555555",
                borderRadius: "6px",
                fontWeight: "500",
                fontStyle: "Medium",
                fontSize: "18px",
                lineHeight: "26px",
                backgroundColor: "#ffffff",
              }}
            >
              3
            </Button>
            <div
              style={{
                width: "49px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #CCCCCC",
                color: "#000000",
                borderRadius: "6px",
              }}
            >
              <RightOutlined
                style={{ width: "24px", height: "24px", color: "#000000" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryListTable;
