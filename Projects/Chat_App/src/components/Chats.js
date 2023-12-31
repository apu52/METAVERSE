import React, { useContext, useEffect, useState } from "react";
import "../styles/style.css";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    currUser.uid && getChats();
  }, [currUser.uid]);
  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="p-5 flex align-middle gap-4 text-white cursor-pointer hover:bg-gray-700"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img
              src={chat[1].userInfo.photoURL}
              alt=""
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="">
              <span className="text-xl font-bold">
                {chat[1].userInfo.displayName}
              </span>
              <p className=" text-sm text-white">{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};
