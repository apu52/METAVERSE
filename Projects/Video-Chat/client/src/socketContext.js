import React,{createContext,useState,useEffect,useRef, Children} from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

const SocketContext=createContext();

const socket=io('http://localhost:5000')

const ContextProvider=({children})=>{

    const [stream,setStream] = useState(null);
    const [me,setMe]=useState('');
    const [call, setCall]=useState({});
    const[callAccepted, setCallAccepted]=useState(false);
    const[callEnded, setCallEnded]=useState(false);
    const[name,setName]=useState('');
    const[permission,setPermission]=useState(false);

     const myVideo=useRef();
     const userVideo=useRef();
     const connection=useRef();

    useEffect(()=>{
            navigator.mediaDevices.getUserMedia({video: true,audio: true}).then(currentStream=>{
                setPermission(true);
                setStream(currentStream);
                console.log(myVideo)
                setTimeout(()=>{ myVideo.current.srcObject=currentStream;},10)
             
              ;
            }).catch(error=>{console.error(error)})

            socket.on("me",(id)=>{
            
                setMe(id)})

            socket.on("calluser",({from,name:callerName,signal})=>{  //rename name to callername
  
                setCall({isReceivedCall:true,from,name:callerName,signal})
            })
    },[]);

    const answerCall=()=>{
       
        setCallAccepted(true);

        const peer= new Peer({initiator:false,trickle:false,stream});

        peer.on('signal',(data)=>{
            socket.emit('answercall',{signal:data,to:call.from})
        })
       
        peer.on('stream',(currentStream)=>{
            userVideo.current.srcObject=currentStream;
        })
       
        peer.signal(call.signal);
        connection.current=peer;
        
       
    }
    const callUser=(id)=>{
        const peer= new Peer({initiator:true,trickle:false,stream});

        peer.on('signal',(data)=>{
            console.log(data);
            socket.emit('calluser',{userToCall:id,signal:data,from:me,name})
        })
       
        peer.on('stream',(currentStream)=>{
            userVideo.current.srcObject=currentStream;
        })

        socket.on('callaccepted',(signal)=>{
            setCallAccepted(true);
            peer.signal(signal);
        })
      connection.current=peer;

    }
    const leaveCall=()=>{

        setCallEnded(true);

        connection.current.destroy();
    
        window.location.reload();
    }

    return(
        <SocketContext.Provider value={{call,callAccepted,myVideo,userVideo,stream,name,setName,callEnded,me,callUser,leaveCall,answerCall,permission}}>
            {children}
        </SocketContext.Provider>
    )
}
export {ContextProvider,SocketContext} 