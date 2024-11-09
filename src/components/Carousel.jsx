import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faChevronLeft, faChevronRight, faUsers } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ title, cards }) => {
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerView(4);  
      } else if (window.innerWidth >= 1024) {
        setCardsPerView(3);  
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2); 
      } else {
        setCardsPerView(1);  
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.ceil(cards.length / cardsPerView) - 1;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mx-auto lg:w-[72.03%] w-[90%]">
      <div className="flex justify-between items-center p-4">
        <h2 className="md:text-xl text-[13px] font-bold">{title}</h2>
        <div className="flex space-x-2">
          <button
            onClick={goToPrevious}
            className="px-2 py-1 lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] text-white bg-gray-400 rounded-[50%] transition-all duration-200 hover:bg-orangeText"
          >
            <FontAwesomeIcon className="font-light text-[16px]" icon={faChevronLeft} />
          </button>
          <button
            onClick={goToNext}
            className="px-2 py-1 text-white lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] bg-gray-400 rounded-[50%] transition-all duration-200 hover:bg-orangeText"
          >
            <FontAwesomeIcon className="font-light text-[16px]" icon={faChevronRight} />
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
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex-none lg:w-1/3 w-full ${
                cardsPerView === 2
                  ? "md:w-1/2"
                  : cardsPerView === 4
                  ? "xl:w-1/4"
                  : "w-1/2"
              } p-2`}
            >
              <div className="bg-white rounded-lg">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={200}
                  height={150}
                  className="w-full rounded-lg object-cover"
                />
                <h2 className="text-lg text-gray-800 font-bold my-4">
                  {card.title}
                </h2>
                <p className="text-[14px] font-extrabold my-4 text-gray-800/70 ">
                  from <b className="text-orangeText inline text-[18px] ms-1">{card.price}</b>
                </p>
                <div className="flex justify-between items-center opacity-80">
                  <div className="text-orangeText text-[14px] ">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span className="ms-1">{card.theDay}</span>
                  </div>
                  <div className="text-orangeText text-[14px] ">
                    <FontAwesomeIcon icon={faUsers} />
                    <span className="ms-1">{card.people}</span>
                  </div>
                </div>
                <div className="text-[14px] text-gray-800/100 mt-4 ">
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
