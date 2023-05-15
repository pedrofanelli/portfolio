import { useEffect } from "react";
import "./Transition.scss";
import transitionOpacity from "../utils/transitionOpacity";
import Card from "../commons/Card";

const Transition = () => {
  let container, title1;
  let ids = [1, 2, 3];
  let projects = ["The Movie Database", "The Mobile Factory", "Broken Office"];
  let description = ["Web app that consumes 'The Movie Database' API to show movies and series to a user, being able to register, add to favorites, and see favorites from other users. It was an individual project done in 4 days", "Mobile e-commerce, with administrator users who can edit the products for sale and control common users. Made with a team of 5 people in 2 weeks", "Mobile first application for reporting problems and damaged items in the offices or homes of Globant workers. Made with a team of 6 people in 4 weeks"];
  let tech = ["Node.js, Express, SQL, JWT, React, and Redux", "Node.js, Express, SQL, JWT, React (Vite.js), Redux and MUI", "Node.js, Express, MongoDB Atlas, JWT, Socket.IO, Google Cloud (Storage and Maps), ML5, Teachable Machine, React, Redux, MUI, PWA and AWS"]
  useEffect(() => {
    container = document.querySelectorAll(".card");
    title1 = document.querySelectorAll("#title");
    transitionOpacity(container);
    transitionOpacity(title1, true);
  }, []);
  
  return (
    <>
      {ids.map((key, i) => (
        <Card key={key} id={key} name={projects[i]} desc={description[i]} tech={tech[i]} />
      ))}
    </>
  );
};

export default Transition;
