import React, { useState, useEffect } from "react";
import "../Styles/Signup.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  // const [username, setUsername] = useState("");
  // const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", email: "", password: "" });
  let name, value;
  const handleData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
    // console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.password) {
      toast.warning("Please Fill the Data");
    } else {
      try {
        const res = await fetch("http://localhost:5000/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const newres = await res.json();
        //console.log(newres);
        if (newres == "exist") {
          toast.error("Id already exist, Please Login");

          // alert("Id already exist, Please Login");
          navigate("/login");
        } else {
          toast.success("Signed Up successfully");
          navigate("/login");
        }
      } catch (err) {
        //console.log(err);
      }
    }
  };

  // console.log(dataname);
  return (
    <div>
      <div className="body">
        <div className="card">
          {/* <p className="errmsg">{errMsg}</p> */}
          <h1> Sign Up</h1>
          <form>
            <p className="formlabel">Name</p>
            <input
              type="text"
              placeholder=""
              className="forminput"
              name="name"
              onChange={handleData}
            />
            <p className="formlabel">Email</p>
            <input
              type="email"
              name="email"
              onChange={handleData}
              className="forminput"
            />
            <p className="formlabel">Password</p>
            <input
              type="password"
              name="password"
              onChange={handleData}
              className="forminput"
            />
            <button className="formbtn" onClick={handleSubmit}>
              Submit
            </button>
            <p className="formfoot">
              Already Have an Account? <a href="/login">Please Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
