import { useState } from "react";
import "./audioplayer.css";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  return (
    <div id="container">
      <div className="seekbar"></div>
      <input
        style={{
          type: "range",
          min: "0",
          max: { duration },
          value: { currentTime },
          onChange: { handleSeek },
        }}
      />
    </div>
  );
};

export default AudioPlayer;
