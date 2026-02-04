import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import AppShell from "@/components/AppShell";

const cairo = Cairo({
  subsets: ["latin"],
  variable: "--font-cairo",
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
    <html lang="en" className={`${cairo.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
