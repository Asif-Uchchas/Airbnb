import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ClientOnly from "./components/ClientOnly";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import { useEffect, useState } from "react";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";


const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <SearchModal/>
          <LoginModal/>
        <RegisterModal/>
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className=" pb-20 pt-28 ">
        {children}
        </div>
      </body>
    </html>
  );
}
