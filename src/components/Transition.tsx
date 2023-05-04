import { useEffect, useState } from "react";
import "./Transition.scss";

const Transition = () => {

    function useElementOnScreen(
        ref: any,
        rootMargin = "0px",
      ) {
        const [isIntersecting, setIsIntersecting] = useState(true);
        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin }
          );
        if (ref.current) {
          observer.observe(ref.current);
        }
        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      }, []);
        return isIntersecting;
      }

  return (
    <div style={{ marginTop: "8em", color: "whitesmoke" }}>
      <div className="container scroll-container">
        <section className="scroll-sequence__container apple-container">
          <div className="scroll-sequence apple-sequence"></div>
          <div className="scroll-sequence__content">
            <div className="speak">
              <h1>Scroll Sequence</h1>
              <p>Just start scrolling</p>
            </div>
            <div className="speak">
              <h1>This is Apple's image sequence</h1>
              <p>All copyrights to them. Please don't sue me!</p>
            </div>
            <div className="speak">
              <h1>The Text Animation</h1>
              <p>Is created with Scroll-out.js. Go check it out!</p>
            </div>
          </div>
        </section>
        {/* <!--   <div class="spacer" style="height: 80vh"></div> --> */}
        <section className="scroll-sequence__container tree-container">
          <div className="scroll-sequence tree-sequence"></div>
          <div className="scroll-sequence__content">
            <div className="speak">
              <h1>This took me a while</h1>
              <p>To get right, but here it is!</p>
            </div>
            <div className="speak">
              <h1>Apple's images load faster</h1>
              <p>
                Compression favors less details. So, shots of the forest was not
                the best idea :P
              </p>
            </div>
            <div className="speak">
              <h1>Running out of things</h1>
              <p>To say so imma head out.</p>
            </div>
          </div>
        </section>
        {/* <!--   <div className="spacer"></div> --> */}
      </div>
    </div>
  );
};

export default Transition;
