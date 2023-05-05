import { useEffect } from "react";
import "./Transition.scss";
import transitionOpacity from "../utils/transitionOpacity";

const Transition = () => {
  let boxElement: any;

  useEffect(() => {
    boxElement = document.querySelector(".transition");
    transitionOpacity(boxElement);
  }, []);

  return (
    <div className="transition">
      <h2>Buenas</h2>
      <h2>Buenas</h2>
      <h2>Buenas</h2>
      <h2>Buenas</h2>
      <img src="src/assets/cat.jpg" alt="Cat pic" />
    </div>
  );
};

export default Transition;
