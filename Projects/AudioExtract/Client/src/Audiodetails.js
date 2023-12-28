import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
function Audiodetails() {
  const { id } = useParams();
  const {
    data: audios,
    setData: setaudios,
    isPending,
    error,
  } = useFetch("http://localhost:5000/audios");

  return (
    <div className="audio-details">
      {error && <div className="error">{error}</div>}
      {isPending && <div>loading....</div>}
      <h2>Audio Details-{id}</h2>
    </div>
  );
}

export default Audiodetails;
