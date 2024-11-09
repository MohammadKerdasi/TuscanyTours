import Hero from "@/components/Hero";
import AboutBackground from "../../../public/bg_hero_2.png";
import AboutSec from "@/components/AboutSec";
import aboutimg from './../../../public/Rectangle 22.png'
import AwardsSec from "@/components/AwardsSec";
import SecCarousel from "@/components/SecCarousel";
import personImg from './../../../public/Ellipse 4.png'

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

const page = () => {
  return (
    <>
     <Hero
        title="Our team cares about your full relax"
        description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
        backgroundImage={AboutBackground.src}
      >
        <button className="block mx-auto rounded-[24px] text-white py-2 px-4 border bg-transparent">View our Tour Packages</button>
      </Hero>
      <div className="py-[120px]">
      <AboutSec img={aboutimg} welcome={'WELCOME TO OUR SITE!'} title={'We Are The Center Of Lucca To Offer You The Best'} desc={'We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!'}/>
      </div>
      <AwardsSec/>
      <div className="flex items-center justify-center my-[120px] ">
        <SecCarousel title="Happy Customers Says " customersCards={customers} />
      </div>
    </>
  )
}

export default page