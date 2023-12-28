import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <h2>Sorry</h2>
      <p>The Page You are trying to reach is not Availiable</p>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
}

export default NotFound;
