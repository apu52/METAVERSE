import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export const Message = ({ message }) => {
  const { currUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  console.log(message);
  return (
    <div
      ref={ref}
      className={`flex gap-2 mb-10 ${
        message.senderId === currUser.uid ? "owner" : "sender"
      }`}
    >
      <div className="messageInfo flex items-center">
        <img
          src={
            message.senderId === currUser.uid
              ? currUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="rounded-full h-8 w-8 mr-2"
        />
        <span className="text-xs">just now</span>
      </div>
      <div className=" messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" className="mt-2" />}
      </div>
    </div>
  );
};
