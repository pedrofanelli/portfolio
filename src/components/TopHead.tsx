import "./TopHead.scss";
import { useEffect } from "react";
import transitionOpacity from "../utils/transitionOpacity";
import { Button } from "@mui/material";

const TopHead = () => {
  let text, title;
  useEffect(() => {
    text = document.querySelectorAll("#headText");
    title = document.querySelectorAll("#headTitle");
    transitionOpacity(text);
    transitionOpacity(title);
  }, []);

  return (
    <>
      <div id="headContainer">
        <h1 id="headTitle">Pedro José Fanelli Ederra</h1>
        <div id="headText">
          <div> FULL STACK WEB DEVELOPER y <br /> Abogado <br /><Button variant="outlined">Download</Button> </div>
          
          <img src="src/assets/myPic.jpg" alt="me" />
        </div>
      </div>
    </>
  );
};

export default TopHead;
