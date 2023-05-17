import { useEffect } from "react";
import transitionOpacity from "../utils/transitionOpacity";
import "./Buttons.scss";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import transitionButtons from "../utils/transitionButtons";
import { Link } from "@mui/material";

const Buttons = () => {
  useEffect(() => {
    let container = document.querySelectorAll("#btnsVision");
    transitionOpacity(container, false, true);
    let array = [];
    for (const el of document.querySelectorAll("[id^=card]")) array.push(el);
    transitionButtons(array);
  }, []);
  return (
    <div id="containerBtns">
      <Link href="#card1" color="inherit">
        <div id="btn1">
          <SupportAgentIcon fontSize="large" />
        </div>
      </Link>
      <Link href="#card2" color="inherit">
        <div id="btn2">
          <SmartphoneIcon fontSize="large" />
        </div>
      </Link>
      <Link href="#card3" color="inherit">
        <div id="btn3">
          <LocalMoviesIcon fontSize="large" />
        </div>
      </Link>
      <Link href="#navv" color="inherit">
        <div id="btn4">
          <ArrowCircleUpIcon fontSize="large" />
        </div>
      </Link>
    </div>
  );
};

export default Buttons;
