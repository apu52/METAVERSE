import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";
function App() {
  return (
    <div className="bg-indigo-950 h-max p-5">
    <div className="bg-purple-400 rounded-lg w-[30%] mx-auto border-white border-2">
    <h1 className="text-lg  md:text-4xl text-white text-center py-1 "><b>Video Chat</b></h1>
    </div>
    
     <VideoPlayer/>
     <Options>
      <Notifications/>
     </Options>
    </div>
  );
}

export default App;
