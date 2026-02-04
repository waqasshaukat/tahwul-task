import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import AppShell from "@/components/AppShell";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Tahawul Audit Platform",
  description: "Digital transformation compliance tracking UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
