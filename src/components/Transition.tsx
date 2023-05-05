//import { useEffect } from "react";
import "./Transition.scss";

const Transition = () => {
  //const numSteps = 20.0;
  let boxElement: any;
  let prevRatio = 0.0;
  let increasingColor = "rgba(40, 40, 190, ratio)";
  let decreasingColor = "rgba(190, 40, 40, ratio)";

  // Set things up
  window.addEventListener(
    "load",
    (event) => {
      boxElement = document.querySelector("#box");
      console.log("HOLA", event);

      createObserver();
    },
    false
  );

  /* useEffect(() => {
        
        boxElement = document.querySelector("#box");

        createObserver();
    }, []) */

  function createObserver() {
    let observer;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList(),
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
  }

  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);

    return thresholds;
  }

  function handleIntersect(entries: any /* observer:any */) {
    // Logic to differentiate between increasing or decreasing the viewport
    entries.forEach((entry: any) => {
      if (entry.intersectionRatio > prevRatio) {
        entry.target.style.backgroundColor = increasingColor.replace(
          "ratio",
          entry.intersectionRatio
        );
      } else {
        entry.target.style.backgroundColor = decreasingColor.replace(
          "ratio",
          entry.intersectionRatio
        );
      }

      prevRatio = entry.intersectionRatio;
    });
  }

  return (
    <div
      style={{
        color: "whitesmoke",
      }}
    >
      <div id="box">
        <div className="vertical">
          Welcome to <strong>The Box!</strong>
        </div>
      </div>
    </div>
  );
};

export default Transition;
