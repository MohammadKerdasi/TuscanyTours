"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SignUpAndLogin from "./SignUpAndLogin";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [authView, setAuthView] = useState('login');

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const openPopUp = (view) => {
    setAuthView(view); 
    setIsPopUpOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed bg-white/10 z-50 transition-colors duration-300 ${
          isMenuOpen || isScrolled
            ? "!bg-grayText/90 text-white backdrop-blur-lg"
            : "bg-transparent text-white"
        }`}
      >
        <div className="lg:w-[72.03%] w-[90%] mx-auto flex justify-between items-center xl:py-3 lg:py-1 py-2">
          <Image
            src="/logo (1).png"
            alt="Logo"
            width={133}
            height={130}
            className="w-[50px] md:w-[80px] xl:w-[80px] h-auto"
          />
          <div className="hidden xl:flex space-x-6 text-lg">
            <Link href="/" className="hover:text-orangeText">
              Home
            </Link>
            <Link href="/about" className="hover:text-orangeText">
              About
            </Link>
            <Link href="/" className="hover:text-orangeText">
              Tour Packages
            </Link>
            <Link href="/" className="hover:text-orangeText">
              Contact Us
            </Link>
          </div>
          <button className="xl:hidden" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
          <div className="hidden xl:flex items-center space-x-4">
            <div className="relative">
              <button
                className="flex items-center disabled:text-gray-300"
                onClick={toggleDropdown}
                disabled
              >
                ENG <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded shadow-lg">
                  <button className="block px-4 py-2 text-orangeText text-sm">ENG</button>
                  <button className="block px-4 py-2 text-orangeText text-sm">AR</button>
                </div>
              )}
            </div>
            <button
              onClick={() => openPopUp("login")}
              className="hover:text-orangeText"
            >
              Login
            </button>
            <button
              onClick={() => openPopUp("signup")}
              className="bg-orangeText flex justify-center items-center py-[10px] px-[30px] rounded-[50px]"
            >
              Sign Up
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="xl:hidden border-t">
            <div className="flex flex-col items-center justify-center space-y-2 py-4 px-6">
              <Link href="/" className="hover:text-orangeText">
                Home
              </Link>
              <Link href="/about" className="hover:text-orangeText">
                About
              </Link>
              <Link href="/" className="hover:text-orangeText">
                Tour Packages
              </Link>
              <Link href="/" className="hover:text-orangeText">
                Contact Us
              </Link>
              <div className="relative">
                <button
                  className="flex items-center hover:text-orangeText focus:outline-none"
                  onClick={toggleDropdown}
                >
                  ENG <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded shadow-lg">
                    <button className="block px-4 py-2 text-sm">ENG</button>
                    <button className="block px-4 py-2 text-sm">AR</button>
                  </div>
                )}
              </div>
              <button
                onClick={() => openPopUp("login")}
                className="hover:text-orangeText"
              >
                Login
              </button>
              <button
                onClick={() => openPopUp("signup")}
                className="bg-orangeText flex justify-center items-center py-[10px] px-[30px] rounded-[50px]"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      <SignUpAndLogin
        isOpen={isPopUpOpen}
        onClose={() => setIsPopUpOpen(false)}
        view={authView}
        setView={setAuthView}
      />
    </>
  );
};

export default Navbar;
