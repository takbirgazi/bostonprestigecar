import type { Metadata } from "next";
import { Lato, Outfit, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SmoothScrollWrapper from "./SmoothScrollWrapper";
import { Toaster } from "react-hot-toast";
import StoreProvider from "./StoreProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Boston Prestige Car",
  description: "bostonprestigecar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${lato.variable} ${poppins.variable} ${outfit.variable}`}
      >
        <Header />
        <SmoothScrollWrapper>
          <StoreProvider>
            {children}
          </StoreProvider>
        </SmoothScrollWrapper>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}