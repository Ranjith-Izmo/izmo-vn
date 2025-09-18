import React from "react";
import { Typography, Button } from "antd";
import Pagination from "../../../components/common/dataTable/pagination";
import { StatusPill } from "../../../components/common/dataTable/statusPill";
import { pricingOutliersTableData } from "../../../utils/pricingIntelligenceData";

const PricingOutliersTable = () => {
  return (
    <>

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
        Pricing Outliers
      </Typography>

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
              <th style={{ padding: "12px", textAlign: "end" }}>Your Price</th>
              <th style={{ padding: "12px", textAlign: "end" }}>
                Regional Avg
              </th>
              <th style={{ padding: "12px", textAlign: "end" }}>Difference</th>
              <th style={{ padding: "12px", textAlign: "end" }}>Suggested Price</th>
              <th style={{ padding: "12px", textAlign: "end" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pricingOutliersTableData.map((row, idx) => (
              <tr
                key={idx}
                style={{
                  borderBottom: "1px solid #E5E5E5",
                  background: "#FAFAFA",
                  fontSize: "18px",
                  lineHeight: "26px",
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
                  {row.yourPrice}
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
                  {row.regionalPrice}
                </td>
                <td
                  style={{
                    padding: "16px",
                    display: "flex",
                    justifyContent: "end",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <StatusPill status={row.difference} />
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
                  {row.suggestedPrice}
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
                    Adjust
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

export default PricingOutliersTable;


