import React from "react";
import CustomDropdown from "../common/CustomDropdown";

const items = [
  { key: "1", label: "Dealer 01" },
  { key: "2", label: "Dealer 02" },
  { key: "3", label: "Dealer 03" },
  { key: "4", label: "Dealer 04" },
  { key: "5", label: "Dealer 05" },
];

const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: "336px",
        right: 0,
        height: "138px",
        background: "var(--color-header-bg)",
        color: "var(--color-header-text)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #E3E3E3",
        padding: "0 2rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        zIndex: 150,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "2rem", fontWeight: 600 }}>Dashboard</span>
      </div>
      <CustomDropdown name="Group / Dealers" items={items} />
    </header>
  );
};

export default Header;
