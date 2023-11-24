import React, { FC } from "react";

const Navbar: FC = () => {
  return (
    <>
      <div className="w-screen absolute top-0 h-10 left-1/2 -translate-x-1/2 bg-white max-w-screen-xl z-20"></div>
      <nav className="w-screen absolute top-6 left-1/2 -translate-x-1/2 h-16 rounded-full shadow-md bg-white border max-w-screen-xl z-30"></nav>
    </>
  );
};

export default Navbar;
