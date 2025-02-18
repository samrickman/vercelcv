import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "../components/particlesBackground";
import NavbarWrapper from "../components/NavbarWrapper";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/*  Wrap everything except particles in NavbarWrapper so the tabs work */}
        <NavbarWrapper>
          {children}
        </NavbarWrapper>
        <ParticlesBackground />
      </body>
    </html>
  );
}
