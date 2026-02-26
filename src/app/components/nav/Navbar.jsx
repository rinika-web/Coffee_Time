import React from "react";
import NavElement from "./NavElement";

const Navbar = () => {
  return (
    <header className="fixed top-6 z-[999] w-full bg-transparent">
      <div className="max-w-[1440px] mx-auto px-10 h-[72px] flex items-center">
        <NavElement />
      </div>
    </header>
  );
};

export default Navbar;
