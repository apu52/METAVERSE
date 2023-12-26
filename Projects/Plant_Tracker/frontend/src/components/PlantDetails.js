import { Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PlantDetails = () => {
  const { id } = useParams();
  const [plantN, setPlant] = useState();
  useEffect(() => {
    const fetchPlantDetails = async () => {
      try {
        const localPlantDetails = localStorage.getItem("plantDetails");
        if (localPlantDetails) {
          const localPlant = JSON.parse(localPlantDetails);
          setPlant(localPlant);
        } else {
          const response = await fetch(
            `http://localhost:5000/api/n1/plant/${id}`
          );
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            setPlant(data);
            localStorage.setItem("plantDetails", JSON.stringify(data));
          } else {
            console.error("Failed to fetch plant details");
          }
        }
      } catch (error) {
        console.error("Error fetching plant details:", error);
      }
    };

    fetchPlantDetails();
  }, [id]);

  return (
    <>
      <div className="flex justify-center items-center mt-8">
        <div className="max-w-md p-6 bg-white rounded-md shadow-md">
          <div className="mb-4">
            <div className="w-full h-48">
              <img
                src={plantN.image.url}
                alt="Plant Image"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">{plantN.plantName}</h2>
            <p className="text-gray-600">{plantN.careInstructions}</p>
            <div className="mt-4">
              <Link to="/waterform" className="text-blue-500 hover:underline">
                Add schedule to water
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
