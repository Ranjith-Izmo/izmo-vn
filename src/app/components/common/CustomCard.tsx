import React from "react";
import { Card } from "antd";
import Image from "next/image";

// interface CustomCardProps {
//   title: string;
//   value: string | number;
//   unit?: string;
//   icon?: React.ReactNode;
//   trend?: "up" | "down";
//   trendValue?: string;
//   trendText?: string;
//   trendColor?: string;
//   subtitle?: string;
// }

const CustomCard = () => {
  return (
    <Card
      style={{
        padding: "18px 20px 18px 22px",
        background: "#fff", 
        border: "2px solid #E3E8EF",
        borderRadius: "12px",
        boxShadow: "0px 1px 2px 0px #1018280D",
        fontFamily: "Inter, sans-serif",
      }}
      bodyStyle={{ padding: 0 }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "0px",
        }}
      >
        <div>
          <div
            style={{
              fontWeight: 500,
              fontSize: "22px",
              lineHeight: "26px",
              color: "#101828",
              marginBottom: "8px",
            }}
          >
            Vehicles Added
          </div>
          <div
            style={{ display: "flex", alignItems: "baseline", gap: "8px" }}
          >
            <span
              style={{ fontWeight: 700, fontSize: "40px", color: "#101828" }}
            >
              42
            </span>
            <span
              style={{ fontWeight: 500, fontSize: "18px", color: "#667085" }}
            >
              this week
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
              gap: "6px",
            }}
          >
            <Image
              src="/cardicons/arrow-up.svg"
              alt="Up"
              width={14}
              height={14}
            />
            <span
              style={{ color: "#2E896E", fontWeight: 500, fontSize: "16px" }}
            >
              12%
            </span>
            <span
              style={{ color: "#667085", fontWeight: 400, fontSize: "16px" }}
            >
              from previous week
            </span>
          </div>
        </div>
        <div
          style={{
            border: "1px solid #88E3C8",
            borderRadius: "8px",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60px",
            height: "60px",
            marginLeft: "12px",
          }}
        >
          <Image
            src="/cardicons/vehiclesAdded.svg"
            alt="Vehicle Icon"
            width={48}
            height={23}
          />
        </div>
      </div>
    </Card>
  );
};

export default CustomCard;
