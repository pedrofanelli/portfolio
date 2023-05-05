import { useEffect } from "react";
import "./Transition.scss";
import transitionOpacity from "../utils/transitionOpacity";

const Transition = () => {
  let boxElement: any;
  let title1: any;

  useEffect(() => {
    boxElement = document.querySelector(".transition");
    title1 = document.querySelector("#test");
    transitionOpacity(boxElement);
    transitionOpacity(title1, true);
  }, []);

  return (<>
    <div className="title01"><h2 id="test">The Movie DataBase</h2></div>
    <div className="transition">
      <h2>Buenas</h2>
      <h2>Buenas</h2>
      <h2>Buenas</h2>
      <h2>Buenas</h2>
      <img src="src/assets/cat.jpg" alt="Cat pic" />
    </div>
    </>
  );
};

export default Transition;
