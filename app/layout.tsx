import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "HappyPie — coffee, cakes & sweets",
  description: "Coffee, cookies, pastries, cakes and sweets — baked fresh, ordered in a minute. A demo café project by Mehak Channa.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${nunito.variable} bg-[#FFF8F0] font-[family-name:var(--font-body)] text-[#3E2A20] antialiased`}>
        <header className="bg-[#3E2A20] text-[#FFF8F0]">
          <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 p-4">
            <a href="/" className="font-[family-name:var(--font-display)] text-xl font-bold text-[#F5C6D0]">
              HappyPie 🥧
            </a>
            <a href="/menu" className="text-sm hover:text-[#F5C6D0]">Menu</a>
            <a href="/cart" className="text-sm hover:text-[#F5C6D0]">Cart</a>
            <a href="/order" className="text-sm hover:text-[#F5C6D0]">Order</a>
            <a href="/about" className="text-sm hover:text-[#F5C6D0]">About</a>
            <a href="/chat" className="text-sm hover:text-[#F5C6D0]">Chat</a>
          </nav>
        </header>
        {children}
        <footer className="mt-16 border-t border-[#EADFD2] py-6 text-center text-xs text-[#8A7466]">
          HappyPie — a demo café project by Mehak Channa · item images are AI-generated
        </footer>
      </body>
    </html>
  );
}