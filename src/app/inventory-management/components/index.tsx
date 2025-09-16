import React from "react";

const Inventory = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
      }}
    >
      <div
        style={{
          background: "#F5F6FA",
          border: "2px dashed #A0AEC0",
          borderRadius: "12px",
          padding: "48px 32px",
          textAlign: "center",
          boxShadow: "0px 1px 2px 0px #1018280D",
        }}
      >
        <h2 style={{ color: "#A0AEC0", marginBottom: "16px" }}>
          🚧 Under Development 🚧
        </h2>
        <p style={{ color: "#718096", fontSize: "18px" }}>Coming Soon...</p>
      </div>
    </div>
  );
};

export default Inventory;
