import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
  variable: "--font-poppins", 
});

export const metadata: Metadata = {
  title: "Frontend Assignment",
  description: "Workspace frontend assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
