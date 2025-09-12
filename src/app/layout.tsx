import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ConfigProvider>
          <div
            style={{
              minHeight: '100vh',
              width: '100vw',
              position: 'relative',
              background: '#fafbfc',
              overflow: 'hidden',
            }}
          >
            <Sidebar />
            <Header />
            <main
              style={{
                marginLeft: '256px',
                marginTop: '80px',
                height: 'calc(100vh - 80px)',
                width: 'calc(100vw - 256px)',
                background: '#fafbfc',
                overflowY: 'auto',
                position: 'relative',
                zIndex: 1,
                padding: '2rem',
              }}
            >
              {children}
            </main>
          </div>
        </ConfigProvider>
      </body>
    </html>
  );
}
