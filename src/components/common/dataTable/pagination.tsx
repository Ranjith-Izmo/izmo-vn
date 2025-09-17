"use client"
import React, { useState } from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Pagination = () => {
  const totalPages = 10; // set how many pages you have
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
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
      <span>
        Showing {(currentPage - 1) * 4 + 1} to {currentPage * 4} of 246 entries
      </span>

      <div style={{ display: "flex", gap: "10px" }}>
        {/* Prev */}
        <div
          onClick={() => goToPage(currentPage - 1)}
          style={{
            width: "49px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #CCCCCC",
            color: currentPage === 1 ? "#999999" : "#000000",
            borderRadius: "6px",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
          }}
        >
          <LeftOutlined
            style={{
              width: "14px",
              height: "14px",
              color: currentPage === 1 ? "#999999" : "#000000",
            }}
          />
        </div>

        {/* Page buttons */}
        {[1, 2, 3].map((page) => (
          <Button
            key={page}
            onClick={() => goToPage(page)}
            style={{
              width: "49px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #CCCCCC",
              color: currentPage === page ? "#FFFFFF" : "#555555",
              borderRadius: "6px",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "26px",
              backgroundColor: currentPage === page ? "#E53935" : "#ffffff",
              cursor: "pointer",
            }}
          >
            {page}
          </Button>
        ))}

        {/* Next */}
        <div
          onClick={() => goToPage(currentPage + 1)}
          style={{
            width: "49px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #CCCCCC",
            color: currentPage === totalPages ? "#999999" : "#000000",
            borderRadius: "6px",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          }}
        >
          <RightOutlined
            style={{
              width: "14px",
              height: "14px",
              color: currentPage === totalPages ? "#999999" : "#000000",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
