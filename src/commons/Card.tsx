import { Button } from "@mui/material";
import { FC } from "react";

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

        <video src="src/assets/take2.mov" autoPlay muted loop>Your browser does not support the video tag</video>
        
      </div>
    </div>
  );
};

export default Card;
