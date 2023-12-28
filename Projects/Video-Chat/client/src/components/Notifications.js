import React, { useContext } from 'react'
import { SocketContext } from "../socketContext";
function Notifications() {

    const {answerCall,call,callAccepted}=useContext(SocketContext);
  return (
    <div>
      {call.isReceivedCall && !callAccepted && 
      <div className='flex justify-center'>
      <h1>{call.name} is calling...</h1>
      <button type="submit"
                className="w-50% block bg-indigo-700 text-xl text-white text-center p-2
        mt-5 rounded-lg shadow-md shadow-black active:shadow-none" onClick={answerCall}>Answer</button>
      </div>
      
      }
    </div>
  )
}

export default Notifications
