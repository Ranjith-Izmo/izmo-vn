import React from "react";
import { Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

interface CustomDropdownProps {
  name: string;
  items: { key: string; label: string }[];
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ name, items }) => (
  <>
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Button
        style={{
          border: "1px solid #CCCCCC",
          borderRadius: "8px",
          background: "#fff",
          color: "#555555",
          fontSize: "20px",
          lineHeight: "26px",
          fontWeight: 400,
          paddingTop: "16px",
          paddingBottom: "16px",
          paddingLeft: "24px",
          fontFamily: "inter",
          paddingRight: "24px",
          height: "auto",
          boxShadow: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        {name}
        <DownOutlined
          style={{
            marginLeft: "8px",
            fontSize: "14px",
            color: "#000000",   
          }}
        />
      </Button>
    </Dropdown>
    <style>
      {`
        .ant-dropdown-menu {
          margin-top: -4px !important;
          border-radius: 1px solid !important;
          border: 1px solid #CCCCCC !important;
          min-width: 220px !important;
          box-shadow: 0px 4px 8px rgba(0,0,0,0.08) !important;
          padding: 0 !important;
        }
        .ant-dropdown-menu-item {
          font-size: 20px !important;
          font-family: inter, sans-serif !important;
          color: #555555 !important;
          padding: 16px 24px !important;
          font-weight: 400 !important;
          line-height: 26px !important;
          border-radius: 0 !important;
          border-bottom: 1px solid #CCCCCC !important;
          border-top: none !important;
        }
        .ant-dropdown-menu-item:last-child {
          border-bottom: none !important;
        }
      `}
    </style>
  </>
);

export default CustomDropdown;
