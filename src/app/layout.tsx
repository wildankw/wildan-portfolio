import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wildan Khaustara W | Software QA Engineer",
  description:
    "Portfolio website for Wildan Khaustara W, Software QA Engineer specializing in automation testing, API testing, performance testing, and QA workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
