import { useEffect } from "react";
import "./Transition.scss";
import transitionOpacity from "../utils/transitionOpacity";
import Card from "../commons/Card";

const Transition = () => {
  let container, title1;
  let ids = [1, 2, 3];
  let projects = ["The Movie Database", "The Mobile Factory", "Broken Office"];

  useEffect(() => {
    container = document.querySelectorAll(".card");
    title1 = document.querySelectorAll("#title");
    transitionOpacity(container);
    transitionOpacity(title1, true);
  }, []);
  
  return (
    <>
      {ids.map((key, i) => (
        <Card key={key} id={key} name={projects[i]} />
      ))}
    </>
  );
};

export default Transition;
