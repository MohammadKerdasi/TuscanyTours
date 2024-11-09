import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import logo from './../../public/logo (1).png'
import Image from 'next/image';
const Footer = () => {
  const services = [
    "Bike and Rickshaw rental",
    "Guided Tours of Lucca",
    "Guided Bike Tour of Lucca",
    "Trip In The Tuscan Hills",
    "Transportation With Luxury Cars",
    "Wine Tours By Bus With Guide"
  ];

  const homeLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Tour Packages", href: "/" }
  ];

  const helpLinks = [
    { name: "Terms of Use", href: "/" },
    { name: "Privacy Policy", href: "/" }
  ];

  const contactInfo = [
    { icon: faLocationDot, text: "Piazza Napoleone, Lucca, Tuscany" },
    { icon: faPhone, text: "+39 346 368 5708" },
    { icon: faEnvelope, text: "italiainlimo@gmail.com" }
  ];

  const socialMedia = [
    { name: "Twitter", icon: faTwitter, href: "#" },
    { name: "Facebook", icon: faFacebookF , href: "#" },
    { name: "Instagram", icon: faInstagram, href: "#" }
  ];

  return (
    <footer className="w-full bg-grayText text-white py-8">
      <div className=" mx-auto lg:w-[72.03%] w-[90%] px-4">
        <div className="mb-8">
          <Image
            src={logo}
            alt="Tours in Tuscany"
            width={133}
            height={130}
            className="mb-8"
          />
        </div>
        
        <div className="w-full flex flex-wrap justify-between md:flex-row flex-col gap-8 mb-8 py-[40px] border-t border-gray-600 border-b">
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href="/" className="hover:text-orange-400 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Home</h3>
            <ul className="space-y-2">
              {homeLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-orange-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-orange-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 ">Contacts</h3>
            <ul className="space-y-2 mb-6 ">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start ">
                  <span className="text-orange-400 mr-2 ">
                    <FontAwesomeIcon size='lg' icon={info.icon} />
                  </span>
                  <span>{info.text}</span>
                  
                </li>
              ))}
            </ul>

          </div>

            <div className="flex flex-col ms-3 w-[190px] ">
            <h3 className="text-lg font-semibold sm:text-center mb-4">Social Media</h3>
            <div className='flex flex-row md:justify-between flex-wrap gap-2'>
              {socialMedia.map((Social, index) => (
                <div href={Social.href} key={index} className="text-grayText  hover:text-orange-300  transition-all duration-50 '">
                    <div className='w-[45px] h-[45px] rounded-[50%] flex justify-center items-center flex-wrap hover:bg-grayText bg-orangeText transition-all duration-300'>
                  <FontAwesomeIcon size='xl' icon={Social.icon} />
                  </div>
                </div>
              ))}
              </div>
            </div>
        </div>

        <div className="text-center pt-4">
          <p className="text-sm text-white">
            Copyright © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
