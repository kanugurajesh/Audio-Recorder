// @ts-nocheck
import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const AudioRecorder = () => {
  const mimeType = "audio/mp3";
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        toast.loading("Getting Permission");
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        toast.dismiss();
        toast.success("Permission Obtained");
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        toast.error("Permission Failed");
      }
    } else {
      toast.error("The MediaRecorder API is not supported in your browser.");
    }
  };

  const startRecording = async () => {
    setRecordingStatus("recording");
    toast.loading("recording");
    //create new Media recorder instance using the stream
    const media = new MediaRecorder(stream, { type: mimeType });
    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;
    //invokes the start method to start the recording process
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };

  const stopRecording = () => {
    setRecordingStatus("inactive");
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      //creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      setAudioChunks([]);
    };
    toast.dismiss();
    toast.success("recording successfull");
  };

  return (
    <div className="mt-1 flex flex-col gap-2">
      <Toaster />
      <main className="mt-1 flex flex-col gap-5">
        <div className="flex flex-col">
          {!permission ? (
            <button
              onClick={getMicrophonePermission}
              type="button"
              className="border-2 border-black p-1 pl-2 pr-2 rounded-md"
            >
              Get Microphone
            </button>
          ) : null}
          {permission && recordingStatus === "inactive" ? (
            <button
              onClick={startRecording}
              type="button"
              className="border-2 border-black p-1 pl-2 pr-2 rounded-md"
            >
              Start Recording
            </button>
          ) : null}
          {recordingStatus === "recording" ? (
            <button
              onClick={stopRecording}
              type="button"
              className="border-2 border-black p-1 pl-2 pr-2 rounded-md"
            >
              Stop Recording
            </button>
          ) : null}
        </div>
        {audio ? (
          <div className="flex flex-col gap-5">
            <audio src={audio} controls></audio>
            <a
              download
              href={audio}
              className="border-2 border-black p-1 pl-2 pr-2 rounded-md"
              onClick={() => toast.success("Recording Downloaded")}
            >
              Download Recording
            </a>
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default AudioRecorder;
