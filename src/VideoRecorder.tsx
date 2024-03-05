// @ts-nocheck
import { useState, useRef } from "react";
const VideoRecorder = () => {
    const [permission, setPermission] = useState(false);
    const [stream, setStream] = useState(null);

    const getCameraPermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: true,
                });
                setPermission(true);
                setStream(streamData);
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    return (
        <div>
            <h2>Video Recorder</h2>
            <main>
                <div className="video-controls">
                    {!permission ? (
                        <button onClick={getCameraPermission} type="button">
                            Get Camera
                        </button>
                    ):null}
                    {permission ? (
                        <button type="button">
                            Record
                        </button>
                    ):null}
                </div>
            </main>
        </div>
    );
};
export default VideoRecorder;