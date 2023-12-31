import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Audiolist = (props) => {
  const [audiofiles, setAudiofiles] = useState([]);
  const user = JSON.parse(localStorage.getItem("useraudify"));
  const email = user.email;
  const trashcan = document.querySelector("span.deletefile");
  const handleDelete = () => {
    fetch(`http://localhost:5000/${trashcan.dataset.doc}?email=${email}`, {
      method: "DELETE",
    })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  // console.log(email);
  useEffect(() => {
    fetch(`http://localhost:5000/audify?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data === "no audios") {
          setAudiofiles(data);
        } else {
          // console.log(data.audio);
          setAudiofiles(data.audio);
        }
      });
  }, []);
  if (audiofiles === "no audios") {
    return (
      <>
        <div className="audio-list">
          <div className="welcome" style={props.wel_style}>
            {/* <h1 style={props.my_style}>Hey! {name}</h1> */}
            <h1 style={props.my_style}>Welcome to {props.title}</h1>
          </div>
          <div className="main">
            <div className="up">
              <p style={props.my_style}>You have currently no audio files! :</p>
              <button className="new_audio" onClick={props.popupfun}>
                Create New
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    // console.log(newarray);
    return (
      <div className="audio-list">
        <div className="welcome" style={props.wel_style}>
          <h1 style={props.my_style}>Welcome to {props.title}</h1>
        </div>
        <div className="main">
          <div className="up">
            <p style={props.my_style}>Here are your recent Audio Files :</p>
            <button className="new_audio" onClick={props.popupfun}>
              Create New
            </button>
          </div>
          <div style={{ height: "90vh", overflowY: "scroll" }}>
            {audiofiles.toReversed().map((audio) => {
              // console.log(audio);
              return (
                <div className="Audio-preview" key={audio._id}>
                  <div className="leftaudio">
                    <Link className="link" to={`/audios/${audio._id}`}>
                      <h2 style={props.my_style}>{audio.title}</h2>
                    </Link>
                  </div>
                  <div className="rightaudio">
                    <p className="paragraph" style={props.p_style}>
                      Created by : {audio.author}
                    </p>
                    <p className="paragraph" style={props.p_style}>
                      Created on : {audio.date.slice(0, 10)}
                    </p>
                    <p className="paragraph" style={props.p_style}>
                      Comments : {audio.comment}
                    </p>
                    <span
                      className="deletefile"
                      onClick={handleDelete}
                      data-doc={audio.date}
                    >
                      <i
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          color: "red",
                        }}
                        className="fa-solid fa-trash-can"
                      ></i>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default Audiolist;
