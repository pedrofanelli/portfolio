import { Button } from "@mui/material";
import { FC } from "react";
//import HoverVideoPlayer from "react-hover-video-player";

interface Props {
  id: number;
  name: string;
  desc: string;
  tech: string;
}

const Card: FC<Props> = (prop) => {
  return (
    <div id={`card${prop.id}`}>
      <div className="titleContainer">
        <h2 id="title">{prop.name}</h2>
      </div>
      <div className="card">
        <div className="cardLeftContainer">
          <h2>
            Technologies <br /> <span>{prop.tech}</span>
          </h2>
          <h2>
            Description <br /> <span>{prop.desc}</span>
          </h2>
          <div className="cardLeftBtnCont">
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              href="http://"
              target="_blank"
              id="cardLeftButtons"
            >
              Documentation
            </Button>
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              href="http://"
              target="_blank"
              id="cardLeftButtons"
            >
              Web Page
            </Button>
          </div>
        </div>
        
        {/* <a id="testtt" href="http://" target="_blank">
          <HoverVideoPlayer
            videoSrc="src/assets/take2.mov"
            pausedOverlay={
              <img
                src="src/assets/foto.png"
                alt="pic"
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
              />
            }
            restartOnPaused
            unloadVideoOnPaused
          />
        </a> */}

        <video src="src/assets/take2.mov" autoPlay muted loop>Your browser does not support the video tag</video>
        
      </div>
    </div>
  );
};

export default Card;
