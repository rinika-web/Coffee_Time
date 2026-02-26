'use client';

import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/app/components/nav/Navbar";

const Home = dynamic(() => import("@/app/components/home/Home"), { ssr: false });
const Menu = dynamic(() => import("@/app/components/menu/Menu"), { ssr: false });
const Footer = dynamic(() => import("@/app/components/footer/Footer"), { ssr: false });
const Contacts = dynamic(() => import("@/app/components/contacts/Contacts"), { ssr: false });
const SmoothScrollProvider = dynamic(() => import("@/app/components/SmoothScrollProvider"), { ssr: false });
const PageTransitionProvider = dynamic(() => import("@/app/components/PageTransitionProvider"), { ssr: false });

const Page = () => {
  return (
    <main className="min-h-screen bg-[#1D1D1D] text-white">
      <Navbar />

      <SmoothScrollProvider>
        <PageTransitionProvider>
          <div id="home"><Home /></div>
          <div id="menu"><Menu /></div>
          <div className="relative perspective-[1200px] overflow-hidden">
            <div id="footer"><Footer /></div>
            <div id="contact"><Contacts /></div>
          </div>
        </PageTransitionProvider>
      </SmoothScrollProvider>
    </main>
  );
};

export default Page;