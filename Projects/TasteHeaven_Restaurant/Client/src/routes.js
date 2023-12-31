import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import Landingpage from "./Landingpage";
import Signup from "./Signup";
import Login from "./Login";
import Menu from "./Menu";
import Cart from "./cart";
import Confirmation from "./Confirmation";
import Orderplaced from "./Orderplaced";
import Profile from "./userProfile";

function Routesnew() {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");

  useEffect(() => {
    // const user_after_every_load=
    setName(JSON.parse(localStorage.getItem("naam")));
    setUser(JSON.parse(localStorage.getItem("Data")));
    console.log(user, name);
  }, []);

  const updateUser = (user) => {
    setUser(user);
    localStorage.setItem("Data", JSON.stringify(user));

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
        <Route path="/" element={<Landingpage updateUser={updateUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={<Login updateName={updateName} updateUser={updateUser} />}
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
          path="/menu/cart"
          element={
            user && user.email ? (
              <Cart updateUser={updateUser} />
            ) : (
              <Landingpage  updateUser={updateUser}/>
            )
          }
        />
        <Route path="*" element={<Landingpage  updateUser={updateUser}/>} />
        <Route path="/menu/cart/confirm" element={ user && user.email ? (
              <Confirmation updateUser={updateUser} />
            ) : (
              <Landingpage  updateUser={updateUser}/>
            )}/>
        <Route path="/menu/cart/confirm/orderplaced" element={user && user.email ?(<Orderplaced updateUser={updateUser} />
            ) : (
              <Landingpage  updateUser={updateUser}/>
            )}/>
             <Route path="/profile" element={user && user.email ?(<Profile updateUser={updateUser} />
            ) : (
              <Landingpage  updateUser={updateUser}/>
            )}/>

           <Route path="*" element={<Landingpage updateUser={updateUser}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routesnew;
