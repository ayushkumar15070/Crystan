import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crystan | Crafted for Perfection.",
  description: "Welcome to CRYSTAN, where precision craftsmanship meets cutting-edge technology. Our brand is built on the pillars of Reliability, Youthful Style, and Advanced Engineering, making every drive a seamless blend of Innovation and Elegance. At CRYSTAN, we believe in pushing the boundaries of automotive design, offering vehicles that not only perform but also inspire. Our commitment to Noble Ambition ensures that every CRYSTAN car delivers unparalleled Quality and Luxury, setting new standards in the industry. Experience the future of driving with CRYSTAN—where Excellence is more than a promise; it’s our guarantee.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
