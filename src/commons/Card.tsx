import { FC } from "react";

interface Props {
  id: number,
  name: string
}

const Card: FC<Props> = (prop) => {
  return (
    <div id={`card${prop.id}`}>
      <div className="titleContainer">
        <h2 id="title">{prop.name}</h2>
      </div>
      <div className="card">
        <h2>Text</h2>
        <h2>Text</h2>
        <img src="src/assets/cat.jpg" alt="Cat pic" />
      </div>
    </div>
  );
};

export default Card;
