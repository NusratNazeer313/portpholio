import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nusrat Nazeer — Frontend Developer",
  description:
    "Portfolio of Nusrat Nazeer — React.js, Next.js & React Native developer crafting modern web and mobile experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${display.variable} ${body.variable} font-body antialiased bg-stone text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
