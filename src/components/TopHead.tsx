import "./TopHead.scss";
import { BaseSyntheticEvent, useEffect, useRef } from "react";
import transitionOpacity from "../utils/transitionOpacity";
import { Button } from "@mui/material";
import Typed from "typed.js";

const TopHead = () => {
  const el = useRef(null);

  let text, title;

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Web Developer",
        "Node.js",
        "React.js",
      ],
      typeSpeed: 80,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    text = document.querySelectorAll("#headBtns");
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
        <h1 id="headTitle">
          Pedro José Fanelli Ederra <br />
          <span id="span1" ref={el}></span> <br />
          <span id="span2">
            Experience in <span className="boldWord"> Node.js</span> and
            <span className="boldWord"> React.js</span>
          </span>
        </h1>
        {/* <div id="headText">
          <div style={{ margin: "20px" }}>
            Experience in
            <span className="boldWord"> Node.js</span> and
            <span className="boldWord"> React.js</span>
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
        </div> */}
      </div>
      <div id="headBtns">
        <Button
          size="large"
          color="error"
          variant="contained"
          onClick={(e) => handleDownload(e)}
          sx={{ textTransform: "none", marginRight: "2%" }}
        >
          Resume (spanish)
        </Button>
        <Button
          size="large"
          color="error"
          variant="contained"
          onClick={(e) => handleDownload(e)}
          sx={{ textTransform: "none", marginLeft: "2%" }}
        >
          Resume (english)
        </Button>
      </div>
      <div>
        <span ref={el} />
      </div>
    </>
  );
};

export default TopHead;
