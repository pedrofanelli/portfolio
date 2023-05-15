import "./TopHead.scss";
import { BaseSyntheticEvent, useEffect } from "react";
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

  function handleDownload(e: BaseSyntheticEvent) {
    let filePath = "src/assets/PedroFanelliEnglish.pdf";
    if (e.target.innerText.includes("spanish"))
      filePath = "src/assets/PedroFanelliSpanish.pdf";
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
          <div style={{ margin: "20px" }}>
            Full Stack Web Developer and also Lawyer <br /> with experience in
            <span className="boldWord"> Node.js</span> and
            <span className="boldWord"> React.js</span> <br /> Currently
            learning C# and .NET
            <br />
            <div
              style={{
                marginTop: "15px",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Button
                variant="contained"
                onClick={(e) => handleDownload(e)}
                sx={{ textTransform: "none" }}
              >
                Resume (spanish)
              </Button>
              <Button
                variant="contained"
                onClick={(e) => handleDownload(e)}
                sx={{ textTransform: "none" }}
              >
                Resume (english)
              </Button>
            </div>
          </div>

          <img src="src/assets/myPic.jpg" alt="me" />
        </div>
      </div>
    </>
  );
};

export default TopHead;
