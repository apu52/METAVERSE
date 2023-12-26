import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const { currUser } = useContext(AuthContext);

  return (
    <div className="navbar flex items-center bg-none h-16 p-4 justify-between text-white">
      <span className="logo text-xl font-bold">talkIn App</span>

      <div className="user flex gap-3 items-center">
        <img
          className="rounded-full h-6 w-6 bg-gray-300"
          src={currUser.photoURL}
          alt="User Profile"
        />

        <span className="text-sm text-white">{currUser.displayName}</span>

        <button
          onClick={() => signOut(auth)}
          className="bg-gray-600 text-white px-1 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
