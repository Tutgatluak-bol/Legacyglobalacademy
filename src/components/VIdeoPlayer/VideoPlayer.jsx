
import { useRef } from "react";
import video from "../../assets/legacy-video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      ref={player}
      onClick={closePlayer}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 ${
        playState ? "" : "hidden"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Legacy Global Academy introduction video"
    >
      <video
        src={video}
        autoPlay
        muted
        controls
        className="h-auto w-[90%] max-w-[900px] border-4 border-white"
      />
    </div>
  );
};

export default VideoPlayer;
