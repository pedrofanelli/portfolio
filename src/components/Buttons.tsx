import { useEffect } from "react";
import transitionOpacity from "../utils/transitionOpacity";
import "./Buttons.scss";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
const Buttons = () => {
  useEffect(() => {
    let container = document.querySelectorAll("#btnsVision");
    transitionOpacity(container, false, true);
  }, []);
  return (
    <div id="containerBtns">
      <div id="btn1">
        <LocalMoviesIcon fontSize="large" />
      </div>
      <div id="btn2">
        <SmartphoneIcon
          //sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          fontSize="large"
        />
      </div>
      <div id="btn3">
        <SupportAgentIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Buttons;
