import React from "react";
import CustomDropdown from "../common/CustomDropdown";
import { Color } from "antd/es/color-picker";
import Image from "next/image";

const dealerItems = [
  { key: "1", label: "Dealer 01" },
  { key: "2", label: "Dealer 02" },
  { key: "3", label: "Dealer 03" },
  { key: "4", label: "Dealer 04" },
  { key: "5", label: "Dealer 05" },
];

const makeitems = [
  { key: "1", label: "Make 01" },
  { key: "2", label: "Make 02" },
  { key: "3", label: "Make 03" },
  { key: "4", label: "Make 04" },
  { key: "5", label: "Make 05" },
];

const modelItems = [
  { key: "1", label: "Model 01" },
  { key: "2", label: "Model 02" },
  { key: "3", label: "Model 03" },
  { key: "4", label: "Model 04" },
  { key: "5", label: "Model 05" },
];

const searchRadiusItems = [
  { key: "1", label: "10k" },
  { key: "2", label: "20k" },
  { key: "3", label: "30k" },
  { key: "4", label: "40k" },
  { key: "5", label: "50k" },
];

const previousDaysItems = [
  { key: "1", label: "10 Days" },
  { key: "2", label: "20 Days" },
  { key: "3", label: "30 Days" },
  { key: "4", label: "40 Days" },
  { key: "5", label: "50 Days" },
];

const Header = () => {
  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: "336px",
          right: 0,
          zIndex: 150,
          flexDirection: "column",
          display: "flex",
          gap: "40px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "138px",
            background: "var(--color-header-bg)",
            color: "var(--color-header-text)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #E3E3E3",
            padding: "0 2rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "32px",
                lineHeight: "48px",
                letterSpacing: "0%",
                color: "#000000",
              }}
            >
              Dashboard
            </span>
          </div>
          <CustomDropdown
            name="Group / Dealers"
            items={dealerItems}
            bg="#fff"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              height: "58px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "0 2rem",
            }}
          >
            <CustomDropdown
              name="All Makes"
              items={makeitems}
              bg="transparent"
            />
            <CustomDropdown
              name="All Models"
              items={modelItems}
              bg="transparent"
            />
            <CustomDropdown
              name="Search Radius : 50k"
              items={searchRadiusItems}
              bg="transparent"
            />
            <CustomDropdown
              name="Last 30 days"
              items={previousDaysItems}
              bg="transparent"
            />
          </div>
          <div
            style={{
              height: "58px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "0 2rem",
            }}
          >
            <button
              className="custom-add-import-btn"
              style={{
                border: "1px solid #444444",
                borderRadius: "8px",
                fontSize: "20px",
                fontWeight: 400,
                padding: "16px 22px",
                lineHeight: "26px",
                paddingTop: "16px",
                paddingBottom: "16px",
                fontFamily: "Inter",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              Add / Import
            </button>
            <button
              className="custom-export-btn"
              style={{
                border: "none",
                borderRadius: "8px",
                fontSize: "20px",
                fontWeight: 400,
                padding: "16px 22px",
                fontFamily: "Inter",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                gap: "8px",
              }}
            >
              Export
              <Image src="/images/export.svg" alt="export" width={26} height={26} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
