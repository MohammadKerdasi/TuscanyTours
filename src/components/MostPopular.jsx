import React from "react";
import Image from "next/image"; 
import img_1 from "./../../public/Rectangle 21.png";
import img_2 from "./../../public/Rectangle 21 (1).png";
import img_3 from "./../../public/Rectangle 21 (2).png";
import img_4 from "./../../public/Rectangle 21 (3).png";
import {
  faBottleWater,
  faCalendar,
  faHeadphones,
  faMap,
  faPeopleGroup,
  faPercent,
  faPersonBiking,
  faTicket,
  faUserTie,
  faBus,
  faLocationDot,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MostPopular = () => {
  const MostData = [
    {
      img: img_1,
      title: "BIKE / RICKSHAW",
      price: "10",
      ul: [
        {
          desc: "Your bike for a day",
          icon: faCalendar,
        },
        {
          desc: "City App",
          icon: faMap,
        },
        {
          desc: "Discount on Rickshaw",
          icon: faPercent,
        },
        {
          desc: "Guaranteed Support",
          icon: faHeadphones,
        },
      ],
      button: "Book Now",
    },
    {
      img: img_2,
      title: "BIKE TOURS",
      price: "30",
      ul: [
        {
          desc: "A Mountain Bike Included",
          icon: faPersonBiking,
        },
        {
          desc: "A Guide For You",
          icon: faUserTie,
        },
        {
          desc: "Bottle of water",
          icon: faBottleWater,
        },
        {
          desc: "Guaranteed Support",
          icon: faHeadphones,
        },
      ],
      button: "Book Now",
    },
    {
      img: img_3,
      title: "BUS TRIPS",
      price: "45",
      ul: [
        {
          desc: "Park ticket",
          icon: faTicket,
        },
        {
          desc: "Return bus",
          icon: faBus,
        },
        {
          desc: "Companion",
          icon: faPeopleGroup,
        },
        {
          desc: "Guaranteed Support",
          icon: faHeadphones,
        },
      ],
      button: "Book Now",
    },
    {
      img: img_4,
      title: "TRANSFER",
      price: "10",
      ul: [
        {
          desc: "Personal Driver",
          icon: faUserTie,
        },
        {
          desc: "Wherever You Want",
          icon: faLocationDot,
        },
        {
          desc: "At the best price",
          icon: faDollarSign,
        },
        {
          desc: "Guaranteed Support",
          icon: faHeadphones,
        },
      ],
      button: "Book Now",
    },
  ];

  return (
    <>
      <div className="w-full my-[60px]">
            <h2 className=" text-[32px] mx-auto lg:w-[72.03%] w-[90%] mb-[60px]">The Most Popular Packages</h2>
        <div className="mx-auto lg:w-[72.03%] w-[90%] grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 my-[60px] gap-[15px]">
          {MostData.map((item, index) => (
              <div className="flex flex-col border rounded-[24px]" key={index}>
              <Image
                src={item.img}
                alt="about_img"
                width={340}
                height={340}
                className="w-full rounded-t-[24px]"
              />
              <div className="p-[25px] flex flex-col">
                <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
                <div className="relative text-xl font-bold mb-4 w-max ms-3">
                  <span className="absolute top-0 -left-3 text-sm text-gray-400">€</span>
                  <b className="text-3xl text-orangeText">
                  {item.price}
                  </b>
                  <span className="absolute bottom-0 left-10 text-xs text-gray-400">/day</span>
                </div>
                <ul className="flex flex-col w-full">
                  {item.ul.map((subItem, subIndex) => (
                    <li key={subIndex} className="flex items-center justify-left mb-4 text-gray-600 gap-3 ">
                      <FontAwesomeIcon icon={subItem.icon} size="2xl" className="mr-2 w-[20px] text-orangeText" />
                      {subItem.desc}
                    </li>
                  ))}
                </ul>
                <button className="mt-4 py-2 px-2 border border-orangeText bg-white hover:bg-orangeText hover:text-white transition-all text-orangeText rounded-[24px]">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MostPopular;
