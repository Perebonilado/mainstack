import React, { FC } from "react";

const AppLoader: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen fixed z-50 top-0 left-0 w-screen bg-black bg-opacity-25">
      <div className="border-8 border-solid border-gray-300 border-t-black rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default AppLoader;
