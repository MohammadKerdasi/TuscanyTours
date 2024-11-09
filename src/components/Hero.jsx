"use client";
import React from 'react';

const Hero = ({ title, description, backgroundImage, children }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="xl:text-[72px] lg:text-[50px] text-[35px] font-bold text-center text-white">{title}</h1>
      <p className=" xl:mb-[60px] lg:text-[24px] text-[14px] font-bold text-center xl:w-[40%] w-[90%] text-white">{description}</p>
      <div className="mt-3 lg:w-[72.03%] w-[90%]">{children}</div>
    </div>
  );
};

export default Hero;