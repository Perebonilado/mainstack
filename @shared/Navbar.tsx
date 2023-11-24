import React, { FC } from "react";
import Logo from "./Logo";

const Navbar: FC = () => {
  return (
    <>
      <div className="w-screen absolute top-0 h-10 left-1/2 -translate-x-1/2 bg-white max-w-screen-xl z-20"></div>
      <nav className="w-screen absolute top-6 left-1/2 -translate-x-1/2 h-16 rounded-full shadow-md bg-white max-w-screen-xl z-30 py-3 px-6 flex">
        <div className="flex items-center" style={{ flex: 1 }}>
          <Logo />
        </div>
        <div className="flex items-center" style={{ flex: 3 }}></div>
        <div className="flex items-center" style={{ flex: 1 }}></div>
      </nav>
    </>
  );
};

export default Navbar;
