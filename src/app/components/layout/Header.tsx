import React from "react";
import CustomDropdown from "../common/CustomDropdown";
import Image from "next/image";
import {
  dealerItems,
  makeitems,
  modelItems,
  searchRadiusItems,
  previousDaysItems
} from "../../utils/menuItems";

const Header = () => {
  return (
    <>
      <header
        style={{
          width: "calc(100% - 336px)",
          position: "relative",
          top: 0,
          background: '#fafbfc',
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
        <div style={{ display: "flex", justifyContent: "space-between"}}>
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
