import React from "react";
import Home from "@/app/components/home/Home";
import Navbar from "@/app/components/nav/Navbar";
import Menu from "@/app/components/menu/Menu";
import Footer from "@/app/components/footer/Footer";
import Contacts from "@/app/components/contacts/Contacts";
import SmoothScrollProvider from "@/app/components/SmoothScrollProvider";
import PageTransitionProvider from "@/app/components/PageTransitionProvider";

const Page = () => {
  return (
    <main className="min-h-screen bg-[#1D1D1D] text-white">
      <Navbar />


      <SmoothScrollProvider>
        <PageTransitionProvider>
          <div id="home"><Home /></div>
          <div id="menu" ><Menu /></div>
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
