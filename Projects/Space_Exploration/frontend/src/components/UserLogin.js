import { useEffect, useState } from "react";
import homeImg from "../assets/home-astronaut.jpg";
import LandingImg from "../elements/LandingImg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Loading from "../elements/Loading";
import Navbar from "./Navbar";

export default function UserLogin(params) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/n1/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        alert("Success");
        localStorage.setItem("token", res.data.token);
        navigate("/earth");
      })
      .catch((err) => {
        alert("service Error");
        console.log(err);
      });
  };

  useEffect(() => {
    if (error) {
      alert("Error in logging In");
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, error, isAuthenticated, navigate]);
  return (
    <>
      <LandingImg image={homeImg} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="relative flex items-center justify-center  mt-8">
            <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
                Log In
              </h2>
              <form onClick={handleLogin}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 p-2 w-full border text-black bg-white border-gray-300 rounded-md"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 p-2 w-full bg-white text-black border border-gray-300 rounded-md"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                  Log In
                </button>
              </form>
              <p className=" py-4 text-black">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-800">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
