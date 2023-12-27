import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-none  text-gray-800 py-8">
      <div className="container mx-auto flex justify-center align-middle ">
        <div className="flex flex-col  items-center space-x-4">
          <div>
            <h2 className="text-xl p-2 text-center font-bold">Name</h2>
            <p className="text-sm">Copyright © 2023</p>
          </div>
          <div className="flex flex-row items-center p-2 space-x-4">
            <Link href="#" className="text-gray-800 hover:text-black">
              Home
            </Link>
            <Link href="#" className="text-gray-800 hover:text-black">
              About
            </Link>
            <Link href="#" className="text-gray-800 hover:text-black">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
