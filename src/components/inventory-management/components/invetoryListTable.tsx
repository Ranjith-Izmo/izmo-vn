import React from "react";
import { Typography, Button } from "antd";
import { inventoryListTableData } from "../../../utils/inventoryData";
import Pagination from "../../../components/common/dataTable/pagination";
import { StatusPill } from "@/components/common/dataTable/statusPill";

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
            letterSpacing: "0%",
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
                    fontSize: "18px",
                    lineHeight: "26px",
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
                    fontSize: "18px",
                    lineHeight: "26px",
                    padding: "16px",
                    textAlign: "end",
                    borderRadius: "4px",
                    height: "58px",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <div
                    style={{
                      fontSize: "18px",
                      lineHeight: "26px",
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
                      fontSize: "18px",
                      lineHeight: "26px",
                      color: "#727272",
                      textAlign: "end",
                    }}
                  >
                    {row.variant}
                  </div>
                </td>
                <td
                  style={{
                    fontSize: "18px",
                    lineHeight: "26px",
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
                    fontSize: "18px",
                    lineHeight: "26px",
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
                    fontSize: "18px",
                    lineHeight: "26px",
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
                    fontSize: "18px",
                    lineHeight: "26px",
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
        <Pagination />
      </div>
    </>
  );
};

export default InventoryListTable;
