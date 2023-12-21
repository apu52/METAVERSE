import VolumeOffTwoToneIcon from "@mui/icons-material/VolumeOffTwoTone";
import VolumeUpTwoToneIcon from "@mui/icons-material/VolumeUpTwoTone";

const UI = ({ isMuted }) => {
  return (
    <div className="UI">
      <div className="highscore">
        H: <span className="hi"></span>
      </div>
      <div className="score">
        S: <span className="sc"></span>
      </div>
      {isMuted ? (
        <div className="sound">
          M <VolumeOffTwoToneIcon />
        </div>
      ) : (
        <div className="sound">
          M <VolumeUpTwoToneIcon />
        </div>
      )}
    </div>
  );
};

export default UI;
