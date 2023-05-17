import { Button } from "@mui/material";
import { FC } from "react";

interface Props {
  data: {
    id: number;
    project: string;
    description: string;
    tech: string;
    github: string;
    url: string;
    videoPath: string;
  };
}

const Card: FC<Props> = (prop) => {

  return (
    <div id={`card${prop.data.id}`}>
      <div className="titleContainer">
        <h2 id="title">{prop.data.project}</h2>
      </div>
      <div className="card">
        <div className="cardLeftContainer">
          <h2>
            Technologies <br /> <span>{prop.data.tech}</span>
          </h2>
          <h2>
            Description <br /> <span>{prop.data.description}</span>
          </h2>
          <div className="cardLeftBtnCont">
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              href={`${prop.data.github}`}
              target="_blank"
              id="cardLeftButtons"
            >
              Documentation
            </Button>
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              href={`${prop.data.url}`}
              target="_blank"
              id="cardLeftButtons"
            >
              Web Page
            </Button>
          </div>
        </div>

        <video src={`${prop.data.videoPath}`} autoPlay muted loop>
          Your browser does not support the video tag
        </video>
      </div>
    </div>
  );
};

export default Card;
