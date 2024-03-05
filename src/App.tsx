// @ts-nocheck

import "./App.css";
import { useState, useRef, useEffect } from "react";
import VideoRecorder from "./VideoRecorder";
import AudioRecorder from "./AudioRecorder";

const App = () => {
  let [recordOption, setRecordOption] = useState("video");
  const toggleRecordOption = (type) => {
    return () => {
      setRecordOption(type);
    };
  };

  const cursorRef = useRef(null);
  const clickRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    const cursorElement = cursorRef.current;
    if (cursorElement) {
      cursorElement.addEventListener("mousemove", handleMouseMove);
      cursorElement.addEventListener("click", () => console.log("Adding"))
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
      ref={cursorRef}
    >
      <div
        className="w-6 h-6 border-2 border-black rounded-full absolute"
        style={{ top: cursorPosition.y - 5 , left: cursorPosition.x - 8, zIndex:-1}}
      ></div>
      <h1 className="text-4xl font-bold">React Media Recorder</h1>
      <div className="flex gap-4">
        <button
          onClick={toggleRecordOption("video")}
          className="text-md border-2 border-black pl-2 pr-2 pt-1 pb-1 rounded-lg"
        >
          Record Video
        </button>
        <button
          onClick={toggleRecordOption("audio")}
          className="text-md border-2 border-black pl-2 pr-2 pt-1 pb-1 rounded-lg"
        >
          Record Audio
        </button>
      </div>
      <div className="text-center">
        {recordOption === "video" ? <VideoRecorder /> : <AudioRecorder />}
      </div>
      <p>
        Cursor Position: {cursorPosition.x}, {cursorPosition.y}
      </p>
    </div>
  );
};

export default App;
