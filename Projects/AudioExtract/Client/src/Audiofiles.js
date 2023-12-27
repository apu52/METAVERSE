import React, { useState, useEffect } from "react";

function Audios() {
  const [audioData, setAudioData] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");

  useEffect(() => {
    fetchAudioFiles();
  }, []);
  const email = JSON.parse(localStorage.getItem("useraudify")).email;
  const fetchAudioFiles = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/audify?email=${email}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setAudioData(data);
      } else {
        console.error("Failed to fetch audio files:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to fetch audio files:", error);
    }
  };
  useEffect(() => {
    if (audioData) {
      const blob = new Blob([audioData], { type: "audio/mp3" });
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    }
  }, [audioData]);

  return (
    <>
      <div>
        <h1>Audio Files</h1>
        {/* {audioFiles.map((audio) => (
        <div key={audio._id}>
          <h2>{audio.filename}</h2>
          <audio controls>
          <source src={`../server/${audio.filename}`} type="audio/mp3" />
          </audio>
        </div>
      ))} */}
        {audioUrl && (
          <audio controls>
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </>
  );
}

export default Audios;
