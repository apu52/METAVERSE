import earthImage from "../assets/earth-img.jpg";
import earthImg from "../assets/home-earth.jpg";
import ourMission from "../assets/home-earth.jpg";
import LandingImg from "../elements/LandingImg";
import { Link, useNavigate } from "react-router-dom";
import SatelliteCard from "../elements/SatelliteCard";
import { GrInstagram, GrTwitter, GrApps } from "react-icons/gr";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Loading from "../elements/Loading";
import ScrollDown from "../elements/ScrollDown";

export default function EarthHome(params) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

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
  const { loading } = useSelector((state) => state.user);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const [positionData, setPositionData] = useState([]);
  const [secPositionData, setSecPositionData] = useState([]);
  const [thridPositionData, setThridPositionData] = useState([]);
  const [fourthPositionData, setFourthPositionData] = useState([]);
  const [dloading, setDLoading] = useState(true);

  const [spaceLaunch, setSpaceLaunches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/n1/satellite");
        const response1 = await axios.get("/api/n1/space-station");
        const response2 = await axios.get("/api/n1/ses-satellite");
        const response3 = await axios.get("/api/n1/agile-satellite");

        const spaceResponse = await axios.get("/api/n1/space-launches");
        if (
          !response.data ||
          !response.data.positions ||
          !response1.data ||
          !response1.data.positions ||
          !response2.data ||
          !response2.data.positions ||
          !response3.data ||
          !response3.data.positions ||
          !spaceResponse.data ||
          !spaceResponse.data.result
        ) {
          throw new Error("Failed to fetch position data");
        }

        const firstPosition = response.data.positions;
        const secPosition = response1.data.positions;
        const thridPosition = response2.data.positions;
        const fourthPosition = response3.data.positions;

        const spaceLaunhes = spaceResponse.data.result;

        setPositionData(firstPosition);
        setSecPositionData(secPosition);
        setThridPositionData(thridPosition);
        setFourthPositionData(fourthPosition);
        setSpaceLaunches(spaceLaunhes);
        setDLoading(false);
      } catch (error) {
        console.error(error);
        setDLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <LandingImg image="https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/shutterstock_1718232061.jpg?itok=Bsf7GRsH" />
      {loading ? (
        <Loading />
      ) : (
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
                <a href="#spaceLaunches" className="text-white hover-underline">
                  Space Launches
                </a>

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
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold  hover:scale-110 -mt-1 py-1 px-4 rounded-md transition duration-300"
                  >
                    Logout
                  </button>
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
                    <a
                      href="#spaceLaunches"
                      className="text-white hover:transition-transform hover:scale-105"
                    >
                      Space Launches
                    </a>
                    {/* Social icons and Logout button */}
                    <div className="flex flex-row py-3 gap-3">
                      <Link
                        to="/instagram"
                        className="text-white hover:scale-105"
                      >
                        <GrInstagram />
                      </Link>
                      <Link
                        to="/twitter"
                        className="text-white hover:scale-105"
                      >
                        <GrTwitter />
                      </Link>
                      <Link to="/apps" className="text-white hover:scale-105">
                        <GrApps />
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold  hover:scale-110 -mt-1 py-1 px-4 rounded-md transition duration-300"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>
          <div className="relative container mx-auto mt-14 py-12 h-screen">
            <section className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                Explore Earth's Wonders
              </h1>
              <p className="text-yellow-500">
                Stay informed about live events and discoveries on Earth.
              </p>
              <a
                href="#spaceLaunches"
                className="bg-none border-2 border-blue-800 text-white px-6 py-2 rounded-full mt-6 inline-block hover:bg-blue-800"
              >
                Get Notified for Live Events
              </a>
            </section>
            <div className=" relative mx-auto  transform translate-x-1/2 md:absolute md:right-1/2 mt-20 animate-bounce">
              <ScrollDown targetSection="#satellites" className="ml-4" />
            </div>
          </div>

          <div className="relative mt-20 max-w-3xl mx-auto" id="satellites">
            <h2 className="text-3xl font-bold text-white">Satellites</h2>
            <div className="py-5 grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {dloading ? (
                <Loading />
              ) : (
                positionData.map((satellite, index) => (
                  <div key={index} className="">
                    <SatelliteCard
                      name="NAVSTAR 81 (USA 319)"
                      imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/GPS_Block_IIIA.jpg/320px-GPS_Block_IIIA.jpg"
                      description="SV05 is the fifth GPS Block III satellite. Satellite construction was completed in early 2021.And weighs approximately 4,331 kg (9,548 lb)"
                      launchDate="17 June 2021 "
                      latitude={satellite.satlatitude}
                      longitude={satellite.satlongitude}
                    />
                  </div>
                ))
              )}
              {secPositionData ? (
                secPositionData.map((satellite, index) => (
                  <div key={index} className="">
                    <SatelliteCard
                      name="Space Station"
                      imageUrl="https://images-assets.nasa.gov/image/iss056e201248/iss056e201248~large.jpg?w=120&h=180&fit=clip&crop=faces%2Cfocalpoint"
                      description="A space station is a large spacecraft in orbit around Earth that serves as a home where astronauts live and work. Unlike spacecraft that are used for specific missions."
                      launchDate="20 November 1998"
                      latitude={satellite.satlatitude}
                      longitude={satellite.satlongitude}
                    />
                  </div>
                ))
              ) : (
                <p className="relative text-white">Loading position data...</p>
              )}
              {thridPositionData ? (
                thridPositionData.map((satellite, index) => (
                  <div key={index} className="">
                    <SatelliteCard
                      name="SES 1"
                      imageUrl="https://mediaassets.airbus.com/pm_38_529_529186-agabt20nsg.jpg?dl=true"
                      description="SES 1 is a communications satellite designed to replace two aging spacecraft serving North America. It will reach its permananet slot in the geostationary arc at 101 degrees west longitude."
                      launchDate="24 April 2010"
                      latitude={satellite.satlatitude}
                      longitude={satellite.satlongitude}
                    />
                  </div>
                ))
              ) : (
                <p className="relative text-white">Loading position data...</p>
              )}
              {fourthPositionData ? (
                fourthPositionData.map((satellite, index) => (
                  <div key={index} className="">
                    <SatelliteCard
                      name="Agile"
                      imageUrl="https://storage.googleapis.com/corpeng-pulse-assets/uploads/2022/12/Tanager-Rendering-1.png"
                      description="The AGILE satellite flew into orbit on top of India's Polar Satellite Launch Vehicle. Liftoff was at 1000 GMT (6:00 a.m. EDT) from the Satish Dhawan Space Center at Sriharikota on India's eastern coast."
                      launchDate="23 April 2007"
                      latitude={satellite.satlatitude}
                      longitude={satellite.satlongitude}
                    />
                  </div>
                ))
              ) : (
                <Loading />
              )}
            </div>
          </div>

          <div className="relative bg-none py-16" id="spaceLaunches">
            <div className="absolute inset-0">
              <img
                src={earthImage}
                alt="Earth Background"
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="container mx-auto relative z-10">
              <h2 className="text-3xl font-bold text-white mb-8">
                Space Launches Live
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dloading ? (
                  <Loading />
                ) : (
                  spaceLaunch.map((event, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 p-6 rounded-lg shadow-md text-white"
                    >
                      <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                      <p className="text-gray-400">
                        {event.pad.location.country}
                      </p>
                      <p className="text-gray-300 mt-2">
                        {event.launch_description}
                      </p>
                      <a
                        href="https://www.rocketlaunch.live/api"
                        className="text-blue-500 mt-4 hover:underline px-2"
                      >
                        Learn More
                      </a>
                      <Link
                        to={`/sendEmail/${event.name}/${event.t0}`}
                        className="hover:underline"
                      >
                        Get Notified
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="relative bg-none text-white">
            <div className="absolute inset-0">
              <img
                src={earthImg}
                alt="Earth Background"
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className=" mx-auto p-4">
              <h2 className="text-3xl  relative z-10 font-bold mb-4">
                Space Events
              </h2>
              <div className="grid gap-4 md:grid-cols-2 relative lg:grid-cols-3">
                {spaceEvents.map((event) => (
                  <div key={event.id} className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-400">Date: {event.date}</p>
                    <p className="text-gray-300">{event.description}</p>
                    <a
                      className="text-blue-800  hover:underline"
                      href={event.link}
                    >
                      Learn More
                    </a>
                  </div>
                ))}
              </div>
              <div className=" relative text-center  cursor-pointer">
                <a
                  href="events"
                  className="text-white text-2xl hover:text-blue-600 hover:underline"
                >
                  see more
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center py-16 md:max-w-3xl md:px-5 mx-auto ">
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
              <div className="lg:mr-8">
                <h2 className="text-lg text-blue-800">- our mission</h2>
                <p className="text-white font-semibold  text-3xl mb-4">
                  MANGALYAN
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur.
                </p>
                <div className=" border border-blue-800 text-white mt-9 p-2 text-center hover:bg-blue-800 cursor-pointer hover:transition-transform">
                  <p>View Details</p>
                </div>
              </div>
              <div className="mt-6 lg:mt-0">
                <img
                  src={ourMission}
                  alt="Earth"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
}
