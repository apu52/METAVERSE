import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

export default function Navbar(params) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="relative z-50">
        <div className="container mx-auto flex items-center justify-between  py-3">
          <div className="flex items-center">
            <a href="/" className="text-white text-lg font-bold px-2">
              The Planets
            </a>
          </div>
          <div className="hidden md:flex flex-row gap-3">
            <Link to="/" className="text-white hover-underline hover:scale-105">
              Home
            </Link>
            <a
              href="mercury"
              className={`text-white  hover-underline  hover:scale-105`}
            >
              Mercury
            </a>
            <a
              href="venus"
              className={`text-white hover-underline  hover:scale-105`}
            >
              Venus
            </a>
            <a
              href="earth"
              className={`text-white  hover-underline  hover:scale-1`}
            >
              Earth
            </a>
            <a
              href="mars"
              className={`text-white  hover-underline hover:scale-105`}
            >
              Mars
            </a>
            <a
              href="jupiter"
              className={`text-white  hover-underline  hover:scale-105`}
            >
              Jupiter
            </a>
            <a
              href="satrun"
              className={`text-white  hover-underline  hover:scale-105`}
            >
              Saturn
            </a>
          </div>
          <div className="flex md:hidden px-2 ">
            {/* Hamburger menu button */}
            <button
              onClick={handleToggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden  bg-black/70 absolute top-16 left-0 w-full">
              <div className="flex flex-col gap-3 p-4">
                <a href="mercury" className="text-white">
                  Mercury
                </a>
                <a href="venus" className="text-white">
                  Venus
                </a>
                <a href="earth" className="text-white">
                  Earth
                </a>
                <a href="mars" className="text-white">
                  Mars
                </a>
                <a href="jupiter" className="text-white">
                  Jupiter
                </a>
                <a href="satrun" className="text-white">
                  Saturn
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
