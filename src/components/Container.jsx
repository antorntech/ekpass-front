import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className="w-full md:max-w-[80%] min-h-screen flex justify-center items-start">
        <div className="w-full">
          <div className="w-full h-screen bg-[url('/assets/bg_main.gif')] bg-no-repeat bg-top bg-cover">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
