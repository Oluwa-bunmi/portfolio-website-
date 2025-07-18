import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Oluwabunmi",
  description: "Portfolio website built with typescript, Next.js and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
