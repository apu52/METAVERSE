import React from "react";
import { Navbar } from "./Navbar";
import { Search } from "./Search";
import { Chats } from "./Chats";
import "../styles/style.css";

export const SideBar = () => {
  return (
    <div className="flex-1 bg-black/30 relative">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};
