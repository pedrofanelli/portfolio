import { useEffect } from "react";
import transitionOpacity from "../utils/transitionOpacity";
import "./Buttons.scss";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import transitionButtons from "../utils/transitionButtons";

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
      <div id="btn1">
        <LocalMoviesIcon fontSize="large" />
      </div>
      <div id="btn2">
        <SmartphoneIcon fontSize="large" />
      </div>
      <div id="btn3">
        <SupportAgentIcon fontSize="large" />
      </div>
      <div id="btn4">
        <ArrowCircleUpIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Buttons;
