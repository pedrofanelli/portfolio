import "./TopHead.scss";

const TopHead = () => {
  return (
    <>
      <div id="headContainer">
        <h1>Pedro José Fanelli Ederra</h1>
        <div id="headText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus dolor, porro quod suscipit libero explicabo ipsam
          magnam quia obcaecati doloribus fugiat, dolorem, reiciendis numquam
          impedit aliquid ad? At, officia autem? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Quaerat, voluptatibus ut. Reiciendis et
          hic temporibus quam rerum commodi possimus ratione molestias, quos
          enim praesentium odit molestiae odio accusantium, similique eaque?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          doloremque sequi illum tempora aliquid fugiat excepturi, est corporis
          doloribus quibusdam maiores libero at placeat? Recusandae quasi saepe
          repellat natus sunt!
        </div>
      </div>
      <div style={{overflow:"hidden", position:"relative", height:"200px"}}>
      <div className="wrapper">
        <div className="rainbow">
          <span></span>
        </div>
        <div className="nyan-cat">
          <div className="feet"></div>
          <div className="tail">
            <span></span>
          </div>
          <div className="body"></div>
          <div className="head"></div>
        </div>
      </div>
      </div>
    </>
  );
};

export default TopHead;
