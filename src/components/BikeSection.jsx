import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

import bike_img from "./../../public/bike picture.png";
import Image from "next/image";

const formFields = [
  {
    id: "name",
    label: "Name and Surname",
    type: "text",
    placeholder: "Enter your name and surname",
  },
  {
    id: "email",
    label: "Email Address",
    type: "text",
    placeholder: "Enter your email address",
  },
  {
    id: "phone",
    label: "Telephone Number",
    type: "tel",
    placeholder: "Enter your telephone number",
  },
  {
    id: "service",
    label: "Service Type",
    type: "select",
    placeholder: "Select the service type",
  },
  {
    id: "date",
    label: "Date",
    type: "date",
    placeholder: "Select the date",
    icon: faCalendar,
  },
  {
    id: "time",
    label: "Time",
    type: "time",
    placeholder: "Select the time",
    icon: faClock,
  },
];

const BikeSection = () => {
  return (
    <div className="bg-multibackground bg-cover w-full ">
      <div className="mx-auto lg:w-[72.03%] w-[90%] flex lg:flex-row flex-col justify-between items-center lg:py-[60px] pt-[60px] lg:relative static">
        <div className="md:w-[734px] w-full z-40">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Book Now Bike
          </h2>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4">
              {formFields.map((field) => (
                <div key={field.id} className="col-span-2 sm:col-span-1">
                  <div className="text-sm mb-1">{field.label}</div>
                  <div className="relative">
                    {field.type === "select" ? (
                      <select
                        className="w-full px-3 py-2 rounded-md bg-white border-none outline-none text-gray-400"
                        placeholder={field.placeholder}
                      >
                        <option className="placeholder:text-gray-500">
                          {field.placeholder}
                        </option>
                      </select>
                    ) : (
                      <div className="relative">
                        <input
                          type={field.type}
                          placeholder={
                            field.type !== "date" && field.type !== "time"
                              ? field.placeholder
                              : ""
                          }
                          className="w-full px-3 py-2 rounded-md placeholder:text-gray-400"
                        />
                        {(field.type === "date" || field.type === "time") && (
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 bg-white placeholder:text-orange-400 text-gray-400 pointer-events-none">
                            {field.placeholder}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button className=" block mx-auto mt-6 bg-orangeText text-white py-[10px] px-[30px] rounded-[24px] ">
              Book Now
            </button>
          </div>
        </div>
        <div className="lg:absolute right-0 bottom-[-30px] lg:block">
          <Image
            src={bike_img}
            alt="Mountain Bike"
            className=" object-contain mt-4"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default BikeSection;
