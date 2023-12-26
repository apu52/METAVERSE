import { Fragment } from "react";
import homeImage from "../assets/home-astronaut.jpg";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default function Home(params) {
  return (
    <>
      <Fragment>
        <Navbar />
        <section class="-z-50 absolute left-0 top-0 w-full h-full">
          <img
            src={homeImage}
            class="w-full h-full object-cover  opacity-60 md:max-h-screen sm:max-h-screen "
            alt="About"
          />
        </section>
        <div className="container mx-auto mt-14 py-12">
          {/* Hero Section */}
          <section className="text-center">
            <h1 className="text-4xl font-bold  text-white mb-4">
              Explore the Wonders of Space
            </h1>
            <p className="text-yellow-500">
              Discover Earth events, upcoming space launches, and more.
            </p>
            <Link
              to="/earth"
              className="bg-none border-2 border-blue-800  text-white px-6 py-2 rounded-full mt-6 inline-block hover:bg-blue-800"
            >
              Explore Now
            </Link>
          </section>
        </div>
      </Fragment>
    </>
  );
}
