// @ts-nocheck

import "./App.css";
import { useState, useRef, useEffect } from "react";
import AudioRecorder from "./AudioRecorder";

const App = () => {
  const toggleRecordOption = (type) => {
    return () => {
      setRecordOption(type);
    };
  };

  const cursorRef = useRef(null);
  const clickRef = useRef(null);

  const [cursorPosition, setCursorPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const handleClick = () => {
    const cursorElement = clickRef.current;
    cursorElement.classList.add("animated-click");
    setTimeout(() => {
      cursorElement.classList.remove("animated-click");
    }, 500);
  };

  useEffect(() => {
    const cursorElement = cursorRef.current;

    if (cursorElement) {
      cursorElement.addEventListener("mousemove", handleMouseMove);
      cursorElement.addEventListener("click", handleClick);
    }
    return () => {
      if (cursorElement) {
        cursorElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center h-screen gap-5 relative"
      style={{ cursor: "none" }}
      ref={cursorRef}
    >
      <div
        className="w-6 h-6 border-2 border-black rounded-full absolute "
        style={{
          top: cursorPosition.y - 5,
          left: cursorPosition.x - 8,
          zIndex: -1,
        }}
        ref={clickRef}
      ></div>
      <h1 className="text-4xl font-bold">React Audio Recorder</h1>
      <div className="text-center">
        <AudioRecorder />
      </div>
    </div>
  );
};

export default App;
