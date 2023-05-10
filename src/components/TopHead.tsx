import "./TopHead.scss";
import { useEffect } from "react";
import transitionOpacity from "../utils/transitionOpacity";

const TopHead = () => {
  let text, title;
  useEffect(() => {
    text = document.querySelectorAll("#headText");
    title = document.querySelectorAll("#headTitle");
    transitionOpacity(text);
    transitionOpacity(title);
  }, []);

  return (
    <>
      <div id="headContainer">
        <h1 id="headTitle">Pedro José Fanelli Ederra</h1>
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
          repellat natus sunt! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Necessitatibus dolor, porro quod suscipit libero
          explicabo ipsam magnam quia obcaecati doloribus fugiat, dolorem,
          reiciendis numquam impedit aliquid ad? At, officia autem? Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Quaerat, voluptatibus
          ut. Reiciendis et hic temporibus quam rerum commodi possimus ratione
          molestias, quos enim praesentium odit molestiae odio accusantium,
          similique eaque? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dignissimos doloremque sequi illum tempora aliquid fugiat
          excepturi, est corporis doloribus quibusdam maiores libero at placeat?
          Recusandae quasi saepe repellat natus sunt! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Necessitatibus dolor, porro quod
          suscipit libero explicabo ipsam magnam quia obcaecati doloribus
          fugiat, dolorem, reiciendis numquam impedit aliquid ad? At, officia
          autem? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quaerat, voluptatibus ut. Reiciendis et hic temporibus quam rerum
          commodi possimus ratione molestias, quos enim praesentium odit
          molestiae odio accusantium, similique eaque? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dignissimos doloremque sequi illum
          tempora aliquid fugiat excepturi, est corporis doloribus quibusdam
          maiores libero at placeat? Recusandae quasi saepe repellat natus sunt!
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
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          doloremque sequi illum tempora aliquid fugiat excepturi, est corporis
          doloribus quibusdam maiores libero at placeat?</div>
      </div>
    </>
  );
};

export default TopHead;
