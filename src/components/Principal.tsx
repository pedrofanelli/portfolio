import Buttons from "./Buttons";
import Footer from "./Footer";
import TopHead from "./TopHead";
import Transition from "./Transition";


const Principal = () => {
  return (
    <>
      <TopHead />
      <div id="btnsVision">
        <Transition />
        <Footer />
      </div>
      <Buttons />
    </>
  );
};

export default Principal;
