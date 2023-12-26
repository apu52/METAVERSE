import LandingImg from "../elements/LandingImg";
import homeImg from "../assets/home-astronaut.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userAction";
import Loading from "../elements/Loading";
import Navbar from "./Navbar";

export default function UserRegister(params) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, password, email } = formData;
  const [avatar, setAvatar] = useState("/anime.png");
  const [avatarPreview, setAvatarPreview] = useState("/anime.png");

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(registerUser(myForm));
  };

  useEffect(() => {
    if (error) {
      alert("Invalid");
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, isAuthenticated, error, navigate]);
  return (
    <>
      <LandingImg image={homeImg} />
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <div className="relative flex items-center justify-center bg-none">
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
            <h2 className="text-3xl text-gray-800 font-extrabold mb-6">
              Register
            </h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border bg-white text-black border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border bg-white text-black border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium bg-white text-black text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border bg-white text-black border-gray-300 rounded-md"
                />
              </div>

              <div id="registerImage" className="mb-4">
                <img
                  src={
                    avatarPreview
                      ? avatarPreview
                      : "https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg"
                  }
                  alt="avatar preview"
                  className="mb-2 rounded-full  w-12  h-auto "
                />
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full py-2 px-4 border border-gray-300 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
              >
                Register
              </button>
            </form>
            <p className="mt-4 text-black">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
