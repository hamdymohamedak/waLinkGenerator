import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WaLink generator",
  description: "Generate a whatsApp Link have a Text message",
};

export default function RootLayout({ children }) {
  return (
    <html className="html" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
