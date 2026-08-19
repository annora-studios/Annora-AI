import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annora AI",
  description: "Your intelligent creative & business partner.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}