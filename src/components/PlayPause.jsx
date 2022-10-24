import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = (props) => {
  return props.isPlaying && props.activeSong?.title === props.song.title ? (
    <FaPauseCircle
      size={35}
      className="text-gray-300"
      onClick={props.handlePause}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-gray-300"
      onClick={props.handlePlay}
    />
  );
};

export default PlayPause;
