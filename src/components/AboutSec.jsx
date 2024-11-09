import Image from "next/image";
import React from "react";


const AboutSec = ({img, welcome, title, desc}) => {


  const numbers = [
    {
      id: 1,
      theNum: "20+",
      numDesc: "Years Experience",
    },
    {
      id: 2,
      theNum: "100+",
      numDesc: "Happy Customer",
    },
    {
      id: 3,
      theNum: "15+",
      numDesc: "Choice of Services",
    },
    {
      id: 4,
      theNum: "10+",
      numDesc: "Professional Guides",
    },
  ];
  return (
    <>
      <div className=" w-full ">
        <div className="flex justify-between items-center xl:flex-row flex-col mx-auto lg:w-[72.03%] w-[90%]">
          <Image
            src={img}
            alt="about_img"
            width={650}
            height={650}
            className="lg:p-[25px] mb-4 lg:w-[650px] w-full"
          />
          <div className="flex justify-center items-start flex-col lg:w-[700px] w-full lg:ms-10 lg:mx-0 mx-auto">
            <p className="text-gray-700/70 text-[14px] mb-[6px]">
              {welcome}
            </p>
            <h2 className=" text-[24px] mb-8">{title}</h2>
            <p className="text-gray-700/70 text-[18px]">{desc}</p>
            <div className="flex flex-row items-center justify-between flex-wrap my-8 lg:w-[65%] w-full gap-8">
              {numbers.map((item, id) => (
                <div className="lg:w-[75px] lg:gap-0" key={id}>
                    <b className="text-orangeText text-[30px] ">{item.theNum}</b>
                    <p className="text-gray-700/70 ">{item.numDesc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
