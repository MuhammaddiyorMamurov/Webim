import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from "next/font/google"
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Json Users",
  description: "Woow, that's so nice to learn Next.js",
};

const poppins = Poppins({
  weight:["400","600","700"],
  subsets:["latin","devanagari"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins} antialiased`}
      >
        <Header/>
        <main className="grow">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
