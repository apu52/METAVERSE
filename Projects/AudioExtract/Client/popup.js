import React, { useState } from "react";
import "./popup.css";
function Popup(props) {
  const [videoUrl, setVideoUrl] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(videoUrl),
    });
    const data = await res.json();
  };
  return props.trigger ? (
    <div className="popup">
      <form action="http://localhost:8000/upload" className="form_">
        <label className="label_">
          <h3>Upload Video File:</h3>
        </label>
        <input className="input-video" type="file" accept="video/*" />
        <label className="label">
          <h3>Upload Link:</h3>
        </label>
        <input
          className="input-url"
          type="url"
          onChange={(e) => {
            setVideoUrl(e.target.value);
          }}
        />
        <input className="submit_video" type="submit" onClick={handleSubmit} />
      </form>
      <button
        className="closeBtn"
        onClick={() => {
          props.settrigger(false);
          props.setblur({
            filter: "none",
          });
        }}
      >
        Close
      </button>
    </div>
  ) : (
    ""
  );
}

export default Popup;
