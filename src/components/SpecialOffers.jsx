import React from "react";
import girl_img from "./../../public/girl_img.png";
import Image from "next/image";
const SpecialOffers = () => {
  return (
    <>
      <div className="bg-multibackground bg-cover w-full lg:mt-[200px] ">
        <div className="mx-auto lg:w-[72.03%] w-[90%] flex lg:flex-row flex-col justify-between items-center  lg:relative">
          <div className=" backdrop-blur-sm z-40 rounded-[24px] bg-white/20 flex flex-col justify-between items-center md:w-[500px] w-full my-[60px] px-[30px] gap-[32px] py-[30px]">
            <h2 className="md:text-[28px] text-[20px] text-center">
              Get Special Offers for Organizations
            </h2>
            <p className="text-center text-[17px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <button className="bg-orangeText text-white py-[10px] px-[30px] rounded-[24px]">
              Contact Us
            </button>
          </div>
          <Image
            src={girl_img}
            alt="about_img"
            width={427}
            height={650}
            className="lg:absolute static right-0 top-[-152px]"
          />
        </div>
      </div>
    </>
  );
};

export default SpecialOffers;
