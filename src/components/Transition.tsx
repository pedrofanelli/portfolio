import { useEffect } from "react";
import "./Transition.scss";
import transitionOpacity from "../utils/transitionOpacity";

const Transition = () => {
  let container: any;
  let title1: any;
  let varios = [1, 2, 3];

  useEffect(() => {
    container = document.querySelectorAll(".card");
    title1 = document.querySelectorAll("#title");
    transitionOpacity(container);
    transitionOpacity(title1, true);
  }, []);

  return (
    <>
      {varios.map(() => (
        <>
          <div className="titleContainer">
            <h2 id="title">The Movie DataBase</h2>
          </div>
          <div className="card">
            <h2>Buenas</h2>
            <h2>Buenas</h2>
            <h2>Buenas</h2>
            <h2>Buenas</h2>
            <img src="src/assets/cat.jpg" alt="Cat pic" />
          </div>
        </>
      ))}
    </>
  );
};

export default Transition;
