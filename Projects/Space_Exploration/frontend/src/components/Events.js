import { useState } from "react";
import { GrApps, GrInstagram, GrTwitter } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Events(params) {
  const spaceEvents = [
    {
      id: 1,
      title: "Penumbral Lunar Eclipse",
      date: "24 - 25 March 2024",
      description:
        "Visible in Much of Europe, North/East Asia, Much of Australia, Much of Africa, North America, South America, Pacific, Atlantic, Arctic, Antarctica.",
      link: "https://www.timeanddate.com/eclipse/lunar/2024-march-25",
    },
    {
      id: 2,
      title: " Total Solar Eclipse",
      date: "April 8, 2024",
      description:
        "Visible in West in Europe, North America, North in South America, Pacific, Atlantic, Arctic.",
      link: "https://www.timeanddate.com/eclipse/solar/2024-april-8",
    },
    {
      id: 3,
      title: " Partial Lunar Eclipse",
      date: "17 - 18 September 2024",
      description:
        "Visible in Europe, Much of Asia, Africa, North America, South America, Pacific, Atlantic, Indian Ocean, Arctic, Antarctica.",
      link: "https://www.timeanddate.com/eclipse/lunar/2024-september-18",
    },
    {
      id: 4,
      title: "Annular Solar Eclipse",
      date: "2 October 2024",
      description:
        "Visible in South in North America, Much of South America, Pacific, Atlantic, Antarctica.",
      link: "https://www.timeanddate.com/eclipse/solar/2024-october-2",
    },
    // Add more events as needed
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="">
      <nav className="relative bg-none p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-white text-lg font-bold">
            Space Exploration
          </Link>
          <div className="hidden md:flex flex-row gap-3">
            <Link to="/earth" className="text-white hover-underline">
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
      <div className="max-w-3xl mx-auto">
        <h2 className=" text-white text-3xl py-8 px-3">Eclipses upcoming</h2>
        <div className="sm:max-w-3xl grid gap-4 md:grid-cols-2 relative lg:grid-cols-3">
          {spaceEvents.map((event) => (
            <div key={event.id} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl text-white font-bold mb-2">
                {event.title}
              </h3>
              <p className="text-gray-400">Date: {event.date}</p>
              <p className="text-gray-300">{event.description}</p>
              <a className="text-blue-800  hover:underline" href={event.link}>
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-xl mx-auto py-3">
        <h2 className="text-white text-3xl font-bold p-2">Weather Report </h2>
        <div className="grid grid-cols-2 gap-1 py-2 text-white">
          <div>
            <p>Hottest Month: </p>
            <p>Coldest Month:</p>
            <p>Wettest Month: </p>
            <p>Windiest Month: </p>
            <p>Annual Precipitation: </p>
          </div>
          <div>
            <p>April (28 °C avg)</p>
            <p>December (22 °C avg)</p>
            <p>September (176.6 mm avg)</p>
            <p>July (9 km/h avg)</p>
            <p> 1028.5 mm (per year)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
