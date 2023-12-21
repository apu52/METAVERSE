import gsap from "gsap";
import { useEffect } from "react";

const StartBtn = ({ start, step }) => {
  useEffect(() => {
    if (step < 5)
      gsap.to(".start-btn", {
        opacity: 1,
        duration: 1,
        ease: "bounce",
      });
    gsap.to(".esc-btn", {
      opacity: 1,
      duration: 1,
      ease: "bounce",
    });
    window.addEventListener(
      "keyup",
      (e) => {
        if (e.key === " " && step < 5)
          document.querySelector(".start-btn").textContent =
            "Press Space to continue";
      },
      { once: true }
    );
  }, [start]);

  useEffect(() => {
    if (step === 4) {
      document.querySelector(".start-btn").textContent = "Enjoy!";
    }
  }, [step]);
  if (start)
    return (
      <>
        <div className="esc-btn">Press Esc to skip the intro</div>
        <div className="start-btn">Press Space to start</div>
      </>
    );
  return null;
};

export default StartBtn;
