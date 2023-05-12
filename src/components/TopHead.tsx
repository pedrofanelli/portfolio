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

  function handleDownload() {
    const filePath = "src/assets/PedroFanelliResume.pdf";
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "Pedro Fanelli Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <div id="headContainer">
        <h1 id="headTitle">Pedro José Fanelli Ederra</h1>
        <div id="headText">
          <div>
            
            FULL STACK WEB DEVELOPER y <br /> Abogado <br />
            <Button variant="contained" onClick={handleDownload} >
              Download Resume
            </Button>
          </div>

          <img src="src/assets/myPic.jpg" alt="me" />
        </div>
      </div>
    </>
  );
};

export default TopHead;
