import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";

import { SquareLoader } from "react-spinners";

import Intro from "./Intro";
import StartBtn from "./StartBtn";
import TextBlock from "./TextBlock";
import Game from "./Game";
import UI from "./UI";
import LoseScreen from "./LoseScreen";

function App() {
  const [isOver, setIsOver] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [newGame, setNewGame] = useState(true);
  const [startTut, setStartTut] = useState(false);
  const [step, setStep] = useState(0);
  const [isSkipped, setisSkipped] = useState(false);

  useEffect(() => {
    const handleSkip = (e) => {
      if (e.key === "Escape") setisSkipped(true);
    };

    window.addEventListener("keydown", (e) => handleSkip(e));

    return () => window.removeEventListener("keydown", (e) => handleSkip(e));
  }, []);

  useEffect(() => {
    startTut &&
      setTimeout(
        (window.onkeydown = (e) => {
          if (e.key === " ") setStep((prev) => prev + 1);
        }),
        6000
      );
  }, [startTut]);

  useEffect(() => {
    if (step === 5 || isSkipped) {
      setNewGame(false);
      setStartTut(false);
      window.addEventListener("keydown", (e) => {
        if (e.key === "m") setIsMuted((prev) => !prev);
      });
    }
  }, [step, isSkipped]);

  return (
    <>
      {isOver && <LoseScreen state={isOver} />}
      {startTut && <StartBtn start={startTut} step={step} />}
      <Suspense
        fallback={
          <SquareLoader
            size={200}
            color={"hsl(70, 100%, 70%)"}
            cssOverride={{
              position: "absolute",
              top: "40%",
              left: "calc(50% - 100px)",
            }}
          />
        }
      >
        <Canvas className="Canvas" shadows>
          {newGame && <TextBlock step={step} endTutorial={setNewGame} />}
          {newGame && <Intro setStart={setStartTut} step={step} />}
          {!newGame && (
            <Game setIsOver={setIsOver} isOver={isOver} isMuted={isMuted} />
          )}
        </Canvas>
      </Suspense>
      {!newGame && <UI isMuted={isMuted} />}
    </>
  );
}

export default App;
