import React from "react";
import img_1 from "./../../public/Rectangle 18.png";
import img_2 from "./../../public/Rectangle 19.png";
import img_3 from "./../../public/Rectangle 20.png";
import img_4 from "./../../public/Rectangle 20 (1).png";
import Image from "next/image";

const cards = [
  {
    id: 1,
    img: img_1,
    title: "Bike and rickshaw rental",
    desc: "Book your quality vehicle quickly for an hour or all day!",
  },
  {
    id: 2,
    img: img_2,
    title: "Guided tour of the countryside",
    desc: "Live the real Lucchese experience by visiting the suburbs by bike!",
  },
  {
    id: 3,
    img: img_3,
    title: "Taxi and NCC service",
    desc: "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
  {
    id: 4,
    img: img_4,
    title: "Bus Package",
    desc: "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
];

const CardSection = () => {
  return (
    <>
      <div className="w-full">
        <div className="mx-auto lg:w-[72.03%] w-[90%] grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-[60px] gap-[32px] ">
          {cards.map((item, index) => (
            <div className="flex flex-col  w-full" key={index}>
              <Image
                src={item.img}
                alt="img"
                width={330}
                height={302}
                className=" rounded-lg mb-5 lg:w-[330px] w-full"
              />
              <h2 className="mb-3 text-gray-900">{item.title}</h2>
              <p className="text-gray-800">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardSection;
