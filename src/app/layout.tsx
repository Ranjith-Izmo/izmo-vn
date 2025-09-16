import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import Sidebar from "../layout/sidebar/sidebar";
import Header from "../layout/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Izmo VN",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ConfigProvider>
          <Sidebar />
          <Header />
          <main
            className="main-content"
            style={{
              marginLeft: '336px',
              width: 'calc(100vw - 336px)',
              background: '#fafbfc',
              overflowY: 'auto',
              position: 'relative',
              zIndex: 1,
              padding: '2rem',
            }}
          >
            {children}
          </main>
        </ConfigProvider>
      </body>
    </html>
  );
}
