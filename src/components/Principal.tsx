import Buttons from "./Buttons";
import Contact from "./Contact";
import Footer from "./Footer";
import TopHead from "./TopHead";
import Transition from "./Transition";


const Principal = () => {
  return (
    <>
      <TopHead />
      <div id="btnsVision">
        <Transition />
        <Contact />
        <Footer />
      </div>
      <Buttons />
    </>
  );
};

export default Principal;
