import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlantCard } from "./PlantCard";

export const Home = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/n1/get-plants");
        if (response.ok) {
          const data = await response.json();
          setPlants(data.data);
        } else {
          console.error("Failed to fetch plants");
        }
      } catch (error) {
        console.error("Error fetching plants:", error);
      }
    };

    fetchPlants();
  }, []);
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1495160/pexels-photo-1495160.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Beautiful Garden"
          className="object-cover w-full h-screen"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <div className="max-w-lg mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              We Take Care of Your <br /> Beautiful Garden
            </h2>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet. Qui distinctio placeat cum quis quidem
              aut facilis ipsam nam facere laudantium et tenetur repudiandae et
              Quis iure.
            </p>
            <div className="mb-10 ">
              <Link
                to="/explore"
                className="bg-green-600 mx-4 hover:bg-green-600 font-semibold text-white py-2 px-4 rounded-md inline-block"
              >
                Explore Our Services
              </Link>
              <Link
                to="/add-plant-care"
                className="bg-none border-2 border-green-600 hover:bg-green-600 font-semibold text-white py-2 px-4 rounded-md inline-block"
              >
                Add Your Plant Care
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto py-16">
        <h2 className="text-3xl text-center font-bold mb-8">
          Services We Provide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 cursor-pointer">
            <h2 className="text-xl font-bold mb-2">Gardening</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet. Qui distinctio placeat cum quis quidem
              aut facilis ipsam nam facere
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 stroke-current text-blue-500 inline-block"
            >
              <path d="M18 8L22 12L18 16"></path>
              <path d="M2 12H22"></path>
            </svg>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 cursor-pointer">
            <h2 className="text-xl font-bold mb-2">Watering Your Plants</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet. Qui distinctio cum quis quidem aut
              facilis ipsam
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 stroke-current text-blue-500 inline-block"
            >
              <path d="M18 8L22 12L18 16"></path>
              <path d="M2 12H22"></path>
            </svg>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 cursor-pointer">
            <h2 className="text-xl font-bold mb-2">Providing Care Routine</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet. Qui distinctio placeat cum quis quidem
              aut facilis ipsam nam facere
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 stroke-current text-blue-500 inline-block"
            >
              <path d="M18 8L22 12L18 16"></path>
              <path d="M2 12H22"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-md">
            <img
              src="https://images.pexels.com/photos/1445416/pexels-photo-1445416.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">
              We have experts who help
              <br /> you with your gardening
            </h2>
            <div className="flex items-center mb-4">
              <div className="flex flex-row">
                <p className="text-green-600 shadow-md mx-4">Get to know</p>
                <p className="text-gray-500">Contact</p>
              </div>
            </div>
            <p className="text-gray-600">
              Et nihil odio est blanditiis consectetur eum quod mollitia qui
              ducimus voluptates et exercitationem laborum et quia illo a rerum
              quibusdam? Est illum ducimus sed voluptatum repellat non maxime
              nihil! Ut dolorem animi
            </p>
          </div>
        </div>
      </div>
      <section id="your-plants">
        <div className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8">Your Plants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
            {plants.map((plant) => (
              <PlantCard key={plant._id} plant={plant} />
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8">Gardening tips & tricks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/3094208/pexels-photo-3094208.jpeg?auto=compress&cs=tinysrgb"
              alt="Gardening Tip 1"
              className="mb-4 rounded-lg"
            />
            <p className="text-gray-700 mb-2">Nihil tempore quo nulla</p>
            <h3 className="text-xl font-bold mb-4">
              Id ullam nostrum et inventore sapiente non omnis soluta vel nobis
              culpa! Est voluptate modi et nemo
            </h3>
          </div>
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/837267/pexels-photo-837267.jpeg?auto=compress&cs=tinysrgb"
              alt="Gardening Tip 2"
              className="mb-4 rounded-lg"
            />
            <p className="text-gray-700 mb-2">Nihil tempore quo nulla</p>
            <h3 className="text-xl font-bold mb-4">
              Id ullam nostrum et inventore sapiente non omnis soluta vel nobis
              culpa! Est voluptate modi et nemo
            </h3>
          </div>
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/1200225/pexels-photo-1200225.jpeg?auto=compress&cs=tinysrgb"
              alt="Gardening Tip 3"
              className="mb-4 rounded-lg"
            />
            <p className="text-gray-700 mb-2">Nihil tempore quo nulla</p>
            <h3 className="text-xl font-bold mb-4">
              Id ullam nostrum et inventore sapiente non omnis soluta vel nobis
              culpa! Est voluptate modi et nemo
            </h3>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <section className="relative mb-8">
          <img
            src="https://images.pexels.com/photos/1302305/pexels-photo-1302305.jpeg?auto=compress&cs=tinysrgb"
            alt="Garden Section"
            className="w-full rounded-lg"
          />
          <div className=" absolute  top-1/2  right-0 w-full">
            <div className="absolute right-20 w-1/2 text-left">
              <h2 className="text-3xl font-bold mb-4">
                Don't know what plant you have?
              </h2>
              <p>
                Lorem ipsum dolor sit amet. Qui distinctio placeat cum quis
                quidem aut facilis ipsam nam facere laudantium et tenetur
                repudiandae et Quis iure.
              </p>
              <div className=" w-1/6 bg-green-600 text-center p-2 my-2 mb-8">
                <Link to="/plant-resource" className="text-white">
                  See here
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
