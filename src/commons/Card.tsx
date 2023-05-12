import { FC } from "react";

interface Props {
  id: number
}

const Card: FC<Props> = (prop) => {
  console.log("EY", prop.id);
  
  return (
    <div id={`card${prop.id}`}>
      <div className="titleContainer">
        <h2 id="title">The Movie DataBase {prop.id}</h2>
      </div>
      <div className="card">
        <h2>Buenas</h2>
        <h2>Buenas</h2>
        <h2>Buenas</h2>
        <h2>Buenas</h2>
        <img src="src/assets/cat.jpg" alt="Cat pic" />
      </div>
    </div>
  );
};

export default Card;
