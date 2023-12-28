import React,{useContext} from 'react'
import { SocketContext } from '../socketContext'


function VideoPlayer() {
    const {myVideo,userVideo,name,callAccepted,callEnded,stream,call,permission} =useContext(SocketContext);
    console.log(permission);
  return (
      <div className='bg-indigo-950 h-[70vh]'>
        <div className='flex justify-center items-center pt-10 pb-5 w-[100%]'>
        {stream &&(
          <div className='bg-white w-[40%] py-2 px-1 rounded-lg mx-10'>
            <p className='text-2xl text-center text-sky-600 my-auto'>{name || 'Name'}</p>
            <div className='w-[100%] md:h-[50vh] mx-4 relative text-center rounded-xl'>
              <video
                playsInline
                muted
                ref={myVideo} // Ensure myVideo ref is assigned to the video element
                autoPlay
                className='absolute right-0 bottom-0 bg-cover overflow-hidden h-[100%] my-auto mr-4 w-[100%]'
              />
            </div>
          </div>
        )}
         
          {callAccepted && !callEnded && (
            <div className='bg-white w-[40%] py-2 px-1 rounded-lg'>
              <p className='text-2xl text-center text-sky-600 my-auto'>{call.name || 'Name'}</p>
              <div className='w-[100%] md:h-[50vh] mx-4 relative text-center'>
                <video
                  playsInline
                  muted
                  ref={userVideo}
                  autoPlay
                  className='absolute right-0 bottom-0 bg-cover overflow-hidden h-[100%] my-auto mr-4 rounded-lg w-[100%]'
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  

    
  
}

export default VideoPlayer
