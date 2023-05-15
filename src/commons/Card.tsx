import { FC } from "react";

interface Props {
  id: number;
  name: string;
  desc: string;
  tech: string;
}

const Card: FC<Props> = (prop) => {
  return (
    <div id={`card${prop.id}`}>
      <div className="titleContainer">
        <h2 id="title">{prop.name}</h2>
      </div>
      <div className="card">
        <div style={{display:"flex", flexDirection:"column", textAlign:"center", height:"80%"}}>
          <h2>Technologies <br /> <span>{prop.tech}</span></h2>
          <h2>Description <br /> <span>{prop.desc}</span></h2>
        </div>
        <img src="src/assets/cat.jpg" alt="Cat pic" />
      </div>
    </div>
  );
};

export default Card;
