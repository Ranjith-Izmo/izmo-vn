"use client";
import React, { useState } from "react";
import Image from "next/image";
import { sidebarMenuItems } from "../../utils/sidebarMenuItems";

const Sidebar = () => {
  const [activeKey, setActiveKey] = useState(sidebarMenuItems[0].key);

  return (
    <aside
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "336px",
        height: "100vh",
        background: "var(--color-sidebar-bg)",
        borderRight: "1px solid #E3E3E3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        boxShadow: "2px 0 8px rgba(0,0,0,0.03)",
        zIndex: 200,
        paddingRight: "20px",
        paddingLeft: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          paddingTop: "40px",
          paddingBottom: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/izmoVN_logo.svg"
          alt="Logo"
          priority
          width={200}
          height={66}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "22px",
        }}
      >
        {sidebarMenuItems.map((item) => {
          const isActive = item.key === activeKey;
          return (
            <div
              key={item.key}
              onClick={() => setActiveKey(item.key)}
              style={{
                display: "flex",
                gap: "20px",
                paddingBottom: "22px",
                justifyContent: "start",
                alignItems: "center",
                cursor: "pointer",
                background: isActive ? "#E53935" : "transparent",
                borderRadius: isActive ? "8px" : "0",
                padding: "8px 12px",
                color: isActive ? "#FFFFFF" : "#555555",
              }}
            >
              <Image
                src={item.icon.props.src}
                alt={item.icon.props.alt}
                width={32}
                height={32}
                style={{
                  filter: isActive
                    ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(200%)"
                    : "invert(32%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(80%)",
                }}
              />
              <span
                style={{
                  fontSize: "18px",
                  lineHeight: "26px",
                  fontWeight: 400,
                  fontFamily: "inter",
                }}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
