import gsap from "gsap";
import { useEffect } from "react";

const LoseScreen = ({ state }) => {
  useEffect(() => {
    gsap.to(".start-new", {
      opacity: 1,
      duration: 0.5,
    });
  }, [state]);

  return (
    <>
      <div className="start-new">Press Space to restart</div>
    </>
  );
};

export default LoseScreen;
