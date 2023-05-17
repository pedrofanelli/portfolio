import { useEffect } from "react";
import "./Transition.scss";
import transitionOpacity from "../utils/transitionOpacity";
import Card from "../commons/Card";
import projects from "../utils/projects";

const Transition = () => {
  
  useEffect(() => {
    let container = document.querySelectorAll(".card");
    let title1 = document.querySelectorAll("#title");
    transitionOpacity(container);
    transitionOpacity(title1, true);
  }, []);
  
  return (
    <>
      {projects.map((key, i) => (
        <Card key={key.id} data={projects[i]} />
      ))}
    </>
  );
};

export default Transition;
