
import React from "react";
import styles from "../styles/customRecommendationCard.module.css";
import Image from "next/image";

interface CustomRecommendationCardProps {
    icon: string; // path to icon svg
    iconBgColor?: string;
    title: string;
    titleColor?: string;
    description: string;
}

const CustomRecommendationCard: React.FC<CustomRecommendationCardProps> = ({
    icon,
    iconBgColor = "#F0F4FF",
    title,
    titleColor = "#0057FF",
    description,
}) => {
    return (
        <div className={styles.card}>
            <div
                className={styles.iconContainer}
                style={{ background: iconBgColor }}
            >
                <Image src={icon} alt="icon" width={68} height={64} />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.title} style={{ color: titleColor }}>
                    {title}
                </div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    );
};

export default CustomRecommendationCard;
