"use client";
import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { sidebarMenuItems } from "@/app/utils/sidebarMenuItems";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const normalizedPath = pathname.toLowerCase();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarLogo}>
        <Image
          src="/images/izmoVN_logo.svg"
          alt="Logo"
          priority
          width={200}
          height={66}
        />
      </div>
      <div className={styles.sidebarMenu}>
        {sidebarMenuItems.map((item) => {
          const itemPath = item.path ? item.path.toLowerCase() : "/";
          const isActive = normalizedPath === itemPath;
          return (
            <div
              key={item.key}
              onClick={() => router.push(item.path || "/")}
              className={`${styles.menuItem} ${
                isActive ? styles.menuItemActive : ""
              }`}
            >
              <Image
                src={item.icon.props.src}
                alt={item.icon.props.alt}
                width={32}
                height={32}
                className={styles.menuItemIcon}
                style={{
                  filter: isActive
                    ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(200%)"
                    : "invert(32%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(80%)",
                }}
              />
              <span className={styles.menuItemLabel}>{item.label}</span>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
