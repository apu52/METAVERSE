import React from "react";
import { useNavigate } from "react-router-dom";

export const PlantCard = ({ plant }) => {
  const navigate = useNavigate();
  const handleDelete = async (plantId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/n1/delete/${plantId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Plant deleted successfully");
        navigate("/");
        window.location.reload();
      } else {
        console.error("Failed to delete plant");
      }
    } catch (error) {
      console.error("Error deleting plant:", error);
    }
  };
  return (
    <div className="max-w-sm mx-auto bg-white rounded-md overflow-hidden shadow-md relative">
      <img
        src={plant.image.url}
        alt={plant.plantName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{plant.plantName}</h2>
        <div className="mb-2">
          <p className="text-gray-600">
            Scheduled on: {plant.wateringSchedule}
          </p>
        </div>
        <p className="text-gray-700">{plant.careInstructions}</p>
      </div>
      <div className="absolute top-0 right-0 m-4">
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
          className="text-red-500 cursor-pointer"
          onClick={() => handleDelete(plant._id)}
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          <line x1="10" x2="10" y1="11" y2="17" />
          <line x1="14" x2="14" y1="11" y2="17" />
        </svg>
      </div>
      <div className="mt-4 p-4 bg-gray-100">
        <p className="text-center text-gray-600">Get me reminded</p>
        <button
          className="block w-full p-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={""}
        >
          Set Reminder
        </button>
      </div>
    </div>
  );
};
