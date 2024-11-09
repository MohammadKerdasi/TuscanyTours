"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

const SecCarousel = ({ title, customersCards }) => {
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(2); 
      } else {
        setCardsPerView(1); 
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.ceil(customersCards.length / cardsPerView) - 1;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative mx-auto lg:w-[72.03%] w-[90%]">
      <div className="flex justify-between items-center p-4">
        <h2 className="md:text-xl text-[13px] font-bold">{title}</h2>
        <div className="flex space-x-2">
          <button
            onClick={goToPrevious}
            className="px-2 py-1 lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] text-white bg-gray-400 rounded-full transition-all duration-200 hover:bg-orangeText"
          >
            <FontAwesomeIcon className="font-light lg:text-[16px] text-[14px]" icon={faChevronLeft} />
          </button>
          <button
            onClick={goToNext}
            className="px-2 py-1 text-white lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] bg-gray-400 rounded-full transition-all duration-200 hover:bg-orangeText"
          >
            <FontAwesomeIcon className="font-light lg:text-[16px] text-[14px]" icon={faChevronRight} />
          </button>
        </div>
      </div>
      <div className="overflow-x-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
          }}
        >
          {customersCards.map((card, index) => (
            <div
              key={index}
              className={`flex-none w-full ${
                cardsPerView === 2 ? "lg:w-1/2" : "md:w-full" 
              } p-2`}
            >
              <div className="border rounded-[24px] flex flex-col justify-center p-[30px]">
                <div className="flex justify-center items-center flex-col gap-[15px]">
                <Image
                  src={card.img}
                  alt='personImg'
                  width={80}
                  height={80}
                  className=" rounded-[50%] text-center"
                />
                <p>{card.name}</p>
                </div>
                <div className="text-[14px] text-gray-800/100 lg:p-[40px] p-2">
                  <p>{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecCarousel;
