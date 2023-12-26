import { useState } from "react";
import { GrApps, GrInstagram, GrTwitter } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function HomeEle({
  homeBtn,
  homeDayNight,
  homeDesc,
  homeDistEarth,
  homeDistSun,
  homeExp,
  homeName,
  homeOrbitRot,
  homeSizeComp,
}) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav className="relative bg-none p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-white text-lg font-bold">
            Space Exploration
          </Link>
          <div className="hidden md:flex flex-row gap-3">
            <Link to="/" className="text-white hover-underline">
              Home
            </Link>
            <Link to="/about" className="text-white hover-underline">
              About
            </Link>
            <Link to="/events" className="text-white hover-underline">
              Events
            </Link>
            {/* Social icons and Logout button */}
            <div className="flex flex-row gap-3 mt-1">
              <Link to="/instagram" className="text-white hover:scale-110">
                <GrInstagram />
              </Link>
              <Link to="/twitter" className="text-white hover:scale-110">
                <GrTwitter />
              </Link>
              <Link to="/apps" className="text-white hover:scale-110">
                <GrApps />
              </Link>
            </div>
          </div>
          {/* Hamburger menu for smaller screens */}
          <div className="flex px-2 md:hidden">
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
            <div className="md:hidden bg-black/80 absolute z-50 top-16 left-0 w-full ">
              <div className="flex flex-col gap-3 p-4 ">
                <Link
                  to="/"
                  className="text-white hover:transition-transform hover:scale-105"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:transition-transform hover:scale-105"
                >
                  About
                </Link>
                <Link
                  to="/events"
                  className="text-white hover:transition-transform hover:scale-105 "
                >
                  Events
                </Link>

                {/* Social icons and Logout button */}
                <div className="flex flex-row py-3 gap-3">
                  <Link to="/instagram" className="text-white hover:scale-105">
                    <GrInstagram />
                  </Link>
                  <Link to="/twitter" className="text-white hover:scale-105">
                    <GrTwitter />
                  </Link>
                  <Link to="/apps" className="text-white hover:scale-105">
                    <GrApps />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="relative bg-none p-8 rounded-md md:w-1/2">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-white mb-4 border-b border-white py-2">
            {homeName}
          </h2>
        </div>
        <div className="text-white">
          <p className="text-lg">{homeDesc}</p>
          <div className="relative bg-none border-white py-2 mt-3 hover:text-black hover:bg-white cursor-pointer text-center border-2 rounded-full">
            <p className="text-lg">{homeBtn}</p>
          </div>
        </div>
      </div>

      <div className="absolute top-24 right-11">
        <div className="lg:grid grid-cols-1  md:grid-cols-2  bg-black/50 rounded-lg">
          <div className="text-white py-2 px-2 border-r  h-20 mt-3 mr-2 border-white">
            <h2 className="font-semibold text-lg -mt-3">Distance from sun</h2>
            <p>
              avg distance
              <br />
              approx. {homeDistSun} million <br /> kilometers.
            </p>
          </div>
          <div className="text-white py-2 px-2">
            <h2 className=" font-semibold text-lg">Distance from earth</h2>
            <p>
              avg. distance <br />
              approx. {homeDistEarth} million <br /> kilometers.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 px-3">
          <div className="text-white bg-black/50 px-2 py-2 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Size and Comparison</h2>
            <p>{homeSizeComp}</p>
          </div>
          <div className="text-white bg-black/50 px-2 py-2 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Orbit and Rotation</h2>
            <p>{homeOrbitRot}</p>
          </div>
          <div className="text-white bg-black/50 px-2 py-2 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Day and Night</h2>
            <p>{homeDayNight}</p>
          </div>
          <div className="text-white bg-black/50 px-2 py-2 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Exploration</h2>
            <p>{homeExp}</p>
          </div>
        </div>
      </div>
    </>
  );
}
