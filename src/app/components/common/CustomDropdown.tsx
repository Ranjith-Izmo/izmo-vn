import React from "react";
import { Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

interface CustomDropdownProps {
  name: string;
  items: { key: string; label: string }[];
  bg: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ name, items, bg }) => (
  <>
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Button
        style={{
          border: "1px solid #CCCCCC",
          borderRadius: "8px",
          background: bg,
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
  </>
);

export default CustomDropdown;
