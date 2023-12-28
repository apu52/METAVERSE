import React, { useContext, useState } from "react";
import { SocketContext } from "../socketContext";
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Options({ children }) {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
    // console.log(me);
  const [idToCall, setIdToCall] = useState("");
  return (
    <div>
      <div className="w-[50%] mx-auto mb-5 bg-slate-50 rounded-lg shadow-md shadow-black">
        <p className="text-4xl text-indigo-700  text-center p-5">
          Account Info
        </p>
        <div className=" flex justify-between ">
          <div className="m-5 p-5">
            <p className="text-2xl text-indigo-700 pb-2">Name</p>
            <input
              type="text"
              className="w-full mx-auto border-b-indigo-700 border-b-2 bg-slate-50 focus:outline-none text-indigo-600 text-xl"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
           
            <CopyToClipboard text={me}>
              <button
                type="submit"
                className="w-full block bg-indigo-700 text-xl text-white text-center p-2
        mt-5 rounded-lg shadow-md shadow-black active:shadow-none"
              >
                Copy your Id
              </button>
            </CopyToClipboard>
          </div>
          <div className="m-5 p-5">
            <p className="text-2xl text-indigo-700 pb-2">Id</p>
            <input
              type="text"
              className="w-50% mx-auto border-b-indigo-700 border-b-2 bg-slate-50 focus:outline-none text-indigo-600 text-xl"
              value={idToCall}
              onChange={(e) => {
                setIdToCall(e.target.value);
              }}
            />
            {callAccepted && !callEnded ? (
              <button
                type="submit"
                className="w-full block bg-indigo-700 text-xl text-white text-center p-2
        mt-5 rounded-lg shadow-md shadow-black active:shadow-none"
                onClick={leaveCall}
              >
                Hang Up
              </button>
            ) : (
              <button
                type="submit"
                className="w-full block bg-indigo-700 text-xl text-white text-center p-2
        mt-5 rounded-lg shadow-md shadow-black active:shadow-none"
                onClick={() => {
                  callUser(idToCall);
                }}
              >
                Call
              </button>
            )}
          </div>
        </div>
        {children}
      </div>

   
    </div>
  );
}

export default Options;
