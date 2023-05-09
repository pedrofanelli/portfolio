import { useEffect } from "react";
import "./Transition.scss";
import transitionOpacity from "../utils/transitionOpacity";
import Card from "../commons/Card";

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
      {varios.map((key) => (
        <Card key={key} />
      ))}
    </>
  );
};

export default Transition;
