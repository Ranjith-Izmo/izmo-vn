import React from "react";
import { Typography } from "antd";
import Pagination from "../../common/dataTable/pagination";
import { StatusPill } from "../../../components/common/dataTable/statusPill";
import { modelSpecificTableData } from "../../../utils/marketAnalyticsData";

const ModelSpecificTable = () => {
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
        Model-specific Market Analysis
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
                Model
              </th>
              <th style={{ padding: "12px", textAlign: "end" }}>Inventory</th>
              <th style={{ padding: "12px", textAlign: "end" }}>Your Avg Price</th>
              <th style={{ padding: "12px", textAlign: "end" }}>Market Avg Price</th>
              <th style={{ padding: "12px", textAlign: "end" }}>
                Price Difference
              </th>
              <th style={{ padding: "12px", textAlign: "end" }}>Turn Rate</th>
              <th style={{ padding: "12px", textAlign: "end" }}>Market Opputunity</th>
            </tr>
          </thead>
          <tbody>
            {modelSpecificTableData.map((row, idx) => (
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
                  {row.Model}
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
                  {row.Inventory}

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
                  {row.YourAvgPrice}
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
                  {row.MarketAvg}
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
                  {row.PriceDifference}
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
                  {row.TurnRate}
                </td>
                <td
                  style={{
                    padding: "16px",
                    display: "flex",
                    justifyContent: "end",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <StatusPill status={row.MktOpportunity} />
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

export default ModelSpecificTable;
