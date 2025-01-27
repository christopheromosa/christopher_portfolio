/* eslint-disable react/react-in-jsx-scope */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio application",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          "bg-gradient-to-r from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white" +  `${geistSans.variable} ${geistMono.variable} antialiased` 
        }
      >
        <ThemeProvider attribute="class">
          <div
            className="grid grid-cols-12 md:px-48 my-14 gap-3 px-5"
            style={{ color: "black" }}
          >
            <div className="bg-white dark:bg-dark-500 rounded-2xl lg:col-span-4 col-span-12 p-4 shadow-custom-light dark:shadow-custom-dark">
              <Sidebar />
            </div>
            <div className="bg-white dark:bg-dark-500 rounded-2xl lg:col-span-8 col-span-12 overflow-hidden shadow-custom-light dark:shadow-custom-dark ">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
