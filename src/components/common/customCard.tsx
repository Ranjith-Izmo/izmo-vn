import React from "react";
import { Card } from "antd";
import Image from "next/image";
import styles from "../../styles/customcard.module.css";

interface CustomCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: string;
  trendIcon?: string;
  trendValue?: string;
  trendText?: string;
  trendColor?: string;
  subtitle?: string;
  iconColor?: string;
  valueColor?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  value,
  unit,
  icon,
  trendIcon,
  trendValue,
  trendText,
  trendColor,
  subtitle,
  iconColor,
  valueColor,
}) => {
  return (
    <Card className={styles["custom-card"]} styles={{ body: { padding: 0 } }}>
      <div className={styles["custom-card-content"]}>
        {/* Heading and icon row */}
        <div className={styles["custom-card-header"]}>
          <span className={styles["custom-card-title"]}>{title}</span>
          <div
            className={styles["custom-card-icon"]}
            style={iconColor ? { borderColor: iconColor } : {}}
          >
            <Image src={icon} alt="Card Icon" width={32} height={32} />
          </div>
        </div>
        {/* Value and subtitle row */}
        <div className={styles["custom-card-value-row"]}>
          <span
            className={styles["custom-card-value"]}
            style={valueColor ? { color: valueColor } : {}}
          >
            {value}
          </span>
          {unit && (
            <span className={styles["custom-card-subtitle"]}>{unit}</span>
          )}
          {subtitle && (
            <span className={styles["custom-card-subtitle"]}>{subtitle}</span>
          )}
        </div>
        {/* Trend row */}
        {(trendIcon || trendValue || trendText) && (
          <div className={styles["custom-card-trend-row"]}>
            {trendIcon && (
              <Image src={trendIcon} alt="Trend Icon" width={14} height={14} />
            )}
            {trendValue && (
              <span
                className={styles["custom-card-trend-up"]}
                style={
                  trendColor
                    ? { color: trendColor }
                    : { color: "#2E896E" }
                }
              >
                {trendValue}
              </span>
            )}
            {trendText && (
              <span className={styles["custom-card-trend-desc"]}>
                {trendText}
              </span>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default CustomCard;
