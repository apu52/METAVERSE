import LandingImg from "../elements/LandingImg";
import homeImg from "../assets/home-astronaut.jpg";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function SendEmail() {
  const { launchName, launchTime } = useParams();
  const dateObject = new Date(launchTime);

  const year = dateObject.getFullYear(); // 2023
  const month = dateObject.getMonth() + 1; // Months are zero-based, so adding 1
  const day = dateObject.getDate(); // 1

  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const scheduleEmail = async () => {
    try {
      const response = await axios.post("/api/n1/schedule-email", {
        email,
        launchName,
        launchTime,
      });
      console.log(response.data);
      if (response.data) {
        alert(`Email Sent Successfully to ${email}`);
      }
      navigate("/earth");
    } catch (error) {
      console.error("Error scheduling email:", error.message);
    }
  };

  const utcLaunch = year + " - " + month + " - " + day;
  return (
    <>
      <LandingImg image={homeImg} />
      <Navbar />
      <div className=" relative flex items-center justify-center mt-8">
        <div className=" bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
          <h1 className=" text-3xl font-extrabold text-gray-800 mb-6">
            Space Launch Reminder
          </h1>
          <label className="block text-sm font-medium text-gray-700">
            Email:
            <input
              type="email"
              className="mt-1 p-2 w-full border text-black bg-white border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label className="block text-sm font-medium text-gray-700">
            Launch Name:
            <input
              type="text"
              className="mt-1 p-2 w-full border text-black bg-white border-gray-300 rounded-md"
              value={launchName}
            />
          </label>
          <br />
          <label className="block text-sm font-medium text-gray-700">
            Launch Time:
            <div className="mt-1 p-2 w-full border text-black bg-white border-gray-300 rounded-md">
              <p>{utcLaunch}</p>
            </div>
          </label>
          <br />
          <button
            onClick={scheduleEmail}
            className=" text-white border bg-green-500 rounded-md p-2"
          >
            Schedule Email
          </button>
        </div>
      </div>
    </>
  );
}
