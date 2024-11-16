"use client";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import HomeBackground from "../../public/bg1.png";
import About_img from "./../../public/about picture.png";
import img_1 from "./../../public/Rectangle 16.png";
import img_2 from "./../../public/Rectangle 16 (3).png";
import img_3 from "./../../public/Rectangle 16 (1).png";
import img_4 from "./../../public/Rectangle 16 (2).png";
import HeroTours from "@/components/HeroTours";
import AboutSec from "@/components/AboutSec";
import SpecialOffers from "@/components/SpecialOffers";
import CardSection from "@/components/CardsSection";
import BikeSection from "@/components/BikeSection";
import MostPopular from "@/components/MostPopular";
import personImg from './../../public/Ellipse 4.png'
import SecCarousel from "@/components/SecCarousel";

export default function Home() {
  const cards = [
    {
      id: 1,
      img: img_1,
      title: "Lucca Bike Tour",
      price: "34 €",
      theDay: "EVERY DAY",
      people: "3-10 PP",
      description:
        "A tour of the city and its surroundings led by a professional guide ",
    },
    {
      id: 2,
      img: img_2,
      title: "LWine tasting In Tuscany",
      price: "34 €",
      theDay: "MONDAY",
      people: "10-30 PP",
      description:
        "The real magic is here where you can enjoy the best Tuscan wine and eat ... ",
    },
    {
      id: 3,
      img: img_3,
      title: "Cinque Terre Tour",
      price: "34 €",
      theDay: "TO BE DECIDED",
      people: "10-50 PP",
      description:
        "Visiting the 5 Terre is a must, and you can never go there enough ... ",
    },
    {
      id: 4,
      img: img_4,
      title: "Siena and Surroundings",
      price: "34 €",
      theDay: "TO BE DECIDED",
      people: "5-10 PP",
      description:
        "Visit the beautiful Siena and the cities that surround it to experience ... ",
    },
    {
      id: 5,
      img: img_1,
      title: "Lucca Bike Tour",
      price: "34 €",
      theDay: "EVERY DAY",
      people: "3-10 PP",
      description:
        "A tour of the city and its surroundings led by a professional guide ",
    },
  ];

  const customers = [
    {
      img : personImg ,
      name : 'Lyod Gomez',
      desc : 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure', 
    },
    {
      img : personImg ,
      name : 'Lyod Gomez',
      desc : 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure', 
    },
    {
      img : personImg ,
      name : 'Lyod Gomez',
      desc : 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure', 
    },
    {
      img : personImg ,
      name : 'Lyod Gomez',
      desc : 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure', 
    }
  ]


  return (
    <>
      <Hero
        title="Enjoy in the best way!"
        description="Enjoy our services for your trip anytime!"
        backgroundImage={HomeBackground.src}
      >
        <HeroTours/>
      </Hero>
      <div className="flex items-center justify-center my-[120px] ">
        <Carousel title="Explore Our Popular Destinantions " cards={cards} />
      </div>
      <AboutSec img={About_img} title={"We are the best company for your visit"} desc={"After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!"} welcome={'WELCOME TO OUR SITE!'}/>
      <SpecialOffers/>
      <CardSection/>
      <BikeSection/>
      <MostPopular/>
      <div className="flex items-center justify-center my-[120px] ">
        <SecCarousel title="Happy Customers Says " customersCards={customers} />
      </div>
    </>
  );
}
