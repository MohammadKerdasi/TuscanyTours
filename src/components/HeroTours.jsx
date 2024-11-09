'use client';
import {
  faCalendarDays,
  faCar,
  faClock,
  faEarthAmericas,
  faFlag,
  faMagnifyingGlass,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const HeroTours = () => {
    const [activeTab, setActiveTab] = useState("Public");

    const selectFields = [
        {
          icon: faUsers,
          name: "Number of people",
          placeholder: "Choose number",
          options: ["--", "--"],
        },
        {
          icon: faCalendarDays,
          name: "Date",
          placeholder: "Choose Date",
          options: ["--", "--," ,"--"],
        },
        {
          icon: faClock,
          name: "Time",
          placeholder: "Choose Time",
          options: ["--", "--", "---"],
        },
        {
          icon: faFlag,
          name: "Tour",
          placeholder: "Select Tour",
          options: ["--", "--", "--"],
        },
        {
          icon: faCar,
          name: "Transportation",
          placeholder: "Select Transportation",
          options: ["--", "--", "--"],
        },
      ];
      
  const tabsData = {
    Public: (
      <div className="flex flex-wrap justify-between items-center rounded-b-lg rounded-tr-lg bg-white p-3 lg:gap-5 gap-2  ">
        {selectFields.map((item, index) => (
          <div key={index} className="lg:p-4 p-1 flex flex-row items-start lg:gap-[10px] gap-2">
            <div>
              <FontAwesomeIcon icon={item.icon} className="text-gray-500 md:text-[18px] text-[14px]" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-gray-700 md:text-[18px] text-[14px]">
                {item.name}
              </span>
              <select
                className="text-grayText bg-white md:text-[18px] text-[14px]"
                name=""
                id=""
              >
                <option disabled selected className="">
                  {item.placeholder}
                </option>
                {item.options.map((option, index) => (
                  <option key={index} defaultValue={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
        <div className="lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] text-white rounded-[12px] bg-orangeText flex justify-center items-center">
          <FontAwesomeIcon  className="lg:text-[40px] text-[20px]" icon={faMagnifyingGlass} />
        </div>
      </div>
    ),
    Private : (
      <div className="flex flex-wrap justify-between items-center rounded-b-lg rounded-tr-lg bg-white p-3 lg:gap-5 gap-2  ">
        {selectFields.map((item, index) => (
          <div key={index} className="md:p-4 p-1 flex flex-row items-start md:gap-[10px] gap-2">
            <div>
              <FontAwesomeIcon icon={item.icon} className="text-gray-500 md:text-[18px] text-[14px]" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-gray-700 md:text-[18px] text-[14px]">
                {item.name}
              </span>
              <select
                className="text-grayText bg-white md:text-[18px] text-[14px]"
                name=""
                id=""
              >
                <option disabled selected className="">
                  {item.placeholder}
                </option>
                {item.options.map((option, index) => (
                  <option key={index} defaultValue={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
        <div className="lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] text-white rounded-[12px] bg-orangeText flex justify-center items-center">
          <FontAwesomeIcon  className="lg:text-[40px] text-[20px]" icon={faMagnifyingGlass} />
        </div>
      </div>
    ),
  };
  return (
    <>
      <div className="w-full">
          <div className="flex flex-col bg-white/20 w-full  md:p-[20px] p-3 rounded-xl">
            <div className="flex ">
              <button
                className={`md:p-4 p-2 md:text-[18px] text-[12px] rounded-tl-lg flex items-center justify-between gap-[10px] ${
                  activeTab === "Public"
                    ? "active bg-white text-orangeText"
                    : "text-white bg-white/40"
                }`}
                onClick={() => setActiveTab("Public")}
              >
                <FontAwesomeIcon icon={faEarthAmericas} />
                Public Tours
              </button>
              <button
                className={`md:p-4 p-2 md:text-[18px] text-[12px] rounded-tr-lg flex items-center justify-between gap-[10px] ${
                  activeTab === "Private"
                    ? "active bg-white text-orangeText"
                    : "text-white bg-white/40"
                }`}
                onClick={() => setActiveTab("Private")}
              >
                <FontAwesomeIcon className="lg:text-[18px]" icon={faUsers} />
                Private Tours
              </button>
            </div>
            <div className="gap-3">{tabsData[activeTab]}</div>
          </div>
        </div>
    </>
  )
}

export default HeroTours