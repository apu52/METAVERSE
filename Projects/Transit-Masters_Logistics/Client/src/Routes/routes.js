import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import Landingpage from "../Pages/Landingpage";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Menu from "../Pages/Menu";
import LogisticProfile from "../Pages/LogisticProfile";
import Success from "../Pages/Success";
import Admin from "../Pages/Admin";

function Routesnew() {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    // const user_after_every_load=
    setName(JSON.parse(localStorage.getItem("naam")));
    setUser(JSON.parse(localStorage.getItem("Data")));
    setAdmin(JSON.parse(localStorage.getItem("admin")));
    // console.log(user, name);
  }, []);

  const updateUser = (user) => {
    setUser(user);
    localStorage.setItem("Data", JSON.stringify(user));

    // console.log(user);
  };
  const updateAdmin = (admin) => {
    setAdmin(admin);
    localStorage.setItem("admin", JSON.stringify(admin));

    // console.log(user);
  };
  const updateName = (name) => {
    setName(name);
    localStorage.setItem("naam", JSON.stringify(name));
    //  console.log(name);
  };
  // function SignInFirst(){
  //   toast.error('Login to access Menu Page')
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage updateUser={updateUser}  />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={<Login updateName={updateName} updateUser={updateUser} updateAdmin={updateAdmin}/>}
        />
        <Route
          path="/menu"
          element={
            user && user.email ? (
              <Menu updateUser={updateUser} userName={name} />
            ) : (
              <Landingpage  updateUser={updateUser} />
            )
          }
        />{" "}
        <Route
          path="/menu/logistic/:id"
          element={
            user && user.email ? (
              <LogisticProfile updateUser={updateUser} />
            ) : (
              <Landingpage  updateUser={updateUser}/>
            )
          }
        />
       
       <Route
          path="/menu/logistic/success"
          element={
            
              <Success updateUser={updateUser} />
           
              
          }
        />

           <Route path="/admin" element={admin && admin.email ?(<Admin updateAdmin={updateAdmin} />
            ) : (
              <Landingpage  updateUser={updateUser}/>
            )}/>
           <Route path="*" element={<Landingpage updateUser={updateUser}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routesnew;
