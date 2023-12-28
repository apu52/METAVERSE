import React, { useState, useRef } from "react";
import "./audify.css";

function Audioexract(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState({
    author: "",
    title: "",
    comment: "",
  });
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);
  let name, value;
  const handleData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("video", selectedFile);
    formData.append("title", data.title);
    formData.append("author", data.author);
    formData.append("comment", data.comment);
    console.log(formData);

    const email = JSON.parse(localStorage.getItem("useraudify")).email;
    try {
      const response = await fetch(
        `http://localhost:5000/audify?email=${email}`,
        {
          method: "POST",
          body: formData,
        }
      );
      input1.current.value = "";
      input2.current.value = "";
      input3.current.value = "";
      input4.current.value = null;
      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);

        // Create a link element and click it to initiate the file download
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "output.mp3";
        link.click();
      } else {
        console.error("Conversion failed:", response.statusText);
      }
    } catch (error) {
      console.error("Conversion failed:", error);
    }
  };

  return props.trigger ? (
    <div className="audify">
      <div>
        <h1>The audio file will be downloaded</h1>
        <p className="_title">Title</p>
        <input
          autoComplete="off"
          className="_input"
          onChange={handleData}
          name="title"
          type="text"
          ref={input1}
        />
        <p className="_author">Author</p>
        <input
          autoComplete="off"
          className="_input"
          onChange={handleData}
          name="author"
          ref={input2}
          type="text"
        />
        <p className="_comment">Comment</p>
        <input
          autoComplete="off"
          className="_input"
          onChange={handleData}
          name="comment"
          type="text"
          ref={input3}
        />
        <input
          className="choosefile"
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          ref={input4}
        />
        <button
          className="convertbutton"
          onClick={handleUpload}
          disabled={!selectedFile}
        >
          Convert
        </button>
        <button
          className="closeBtn"
          onClick={() => {
            props.settrigger(false);
            props.setblur({
              filter: "none",
            });
            window.location.reload();
          }}
        >
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Audioexract;
