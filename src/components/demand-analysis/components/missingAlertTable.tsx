import React from "react";
import { Typography } from "antd";
import Pagination from "../../common/dataTable/pagination";
import { StatusPill } from "../../common/dataTable/statusPill";
import { missingdemandAlertTable } from "../../../utils/demandAnalysisData";

const MissingAlertTable = () => {
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
        Missing Demand Alert List
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
                  paddingLeft: "24px",
                  textAlign: "start",
                }}
              >
                Model
              </th>
              <th style={{ padding: "12px", textAlign: "end" }}>Rank</th>
              <th style={{ padding: "12px", textAlign: "end" }}>
                Search Volume
              </th>
              <th style={{ padding: "12px", textAlign: "end" }}>Stock</th>
              <th style={{ padding: "12px", paddingRight: "24px", textAlign: "end" }}>
                Opportunity Score
              </th>
            </tr>
          </thead>
          <tbody>
            {missingdemandAlertTable.map((row, idx) => (
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
                    paddingLeft: "24px",
                    textAlign: "start",
                  }}
                >
                  {row.model}
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
                  {row.rank}
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
                  {row.searchVolume}
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
                  {row.stock}
                </td>

                <td
                  style={{
                    fontSize: "18px",
                    lineHeight: "26px",
                    padding: "16px",
                    paddingRight: "24px",
                    display: "flex",
                    justifyContent: "end",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <StatusPill status={row.oppurtunityScore} />
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

export default MissingAlertTable;
