import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import { DetailLevelProvider, useDetailLevel } from "@/context/DetailLevelContext";
import BackgroundManager from "@/components/BackgroundManager"; // Import the client component


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sam Rickman",
  description: "Social data scientist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DetailLevelProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <NavbarWrapper>{children}</NavbarWrapper>
          <BackgroundManager />
        </body>
      </DetailLevelProvider>
    </html>
  );
}

