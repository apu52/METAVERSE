import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddPlant = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    plantName: "",
    wateringSchedule: "",
    careInstructions: "",
  });
  const { plantName, wateringSchedule, careInstructions } = formData;
  const [plantPhoto, setPlantPhoto] = useState("/anime.png");
  const handleChange = (e) => {
    if (e.target.name === "plantPhoto") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setPlantPhoto(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else if (e.target.name === "wateringSchedule") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = {
      plantName: formData.plantName,
      careInstructions: formData.careInstructions,
      wateringSchedule: formData.wateringSchedule,
      image: plantPhoto,
    };

    try {
      const response = await fetch("http://localhost:5000/api/n1/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        alert("Plant added Successfully");
        navigate("/");
        console.log("Data sent successfully");
      } else {
        console.error("Failed to send data to the server", response.statusText);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl text-center font-bold mb-8">Plant Care Form</h2>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="plantName"
            className="block text-sm font-medium text-gray-700"
          >
            Plant Name
          </label>
          <input
            type="text"
            id="plantName"
            name="plantName"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter the plant name"
            onChange={handleChange}
            value={plantName}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="wateringSchedule"
            className="block text-sm font-medium text-gray-700"
          >
            Watering Date:
          </label>
          <input
            type="date"
            value={wateringSchedule}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            onChange={handleChange}
            name="wateringSchedule"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="careInstructions"
            className="block text-sm font-medium text-gray-700"
          >
            Care Instructions
          </label>
          <textarea
            id="careInstructions"
            name="careInstructions"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter care instructions for the plant"
            onChange={handleChange}
            value={careInstructions}
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="plantPhoto"
            className="block text-sm font-medium text-gray-700"
          >
            Plant Photo
          </label>
          <input
            type="file"
            id="plantPhoto"
            name="plantPhoto"
            accept="image/*"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
