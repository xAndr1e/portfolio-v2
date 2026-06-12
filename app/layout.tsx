import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrie Elbambuena",
  description: "Version 2 of my personal portfolio website. Built with Next.js 13 and Tailwind CSS.",
  icons: {
    icon: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen justify-items-center flex-col">{children}</body>
    </html>
  );
}
