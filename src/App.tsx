import TopHead from "./components/TopHead";
import GetParticles from "./components/GetParticles";
import Transition from "./components/Transition";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <GetParticles />
      <Navbar />
      <TopHead />
      <div id="btnsVision">
        <Transition />
        <Footer />
      </div>
      <Buttons />
    </>
  );
}

export default App;
