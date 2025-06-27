import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LogoutBtn } from "./components/LogoutBtn";
import { Navbar } from "./components/Navbar";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "R.A.Y.",
  description: "Your modular productivity workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}
      >
        <div className="flex w-full  justify-between cursor-pointer">
          <Navbar />
          <LogoutBtn />
        </div>
        {children}
      </body>
    </html>
  );
}
