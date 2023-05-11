import TopHead from "./components/TopHead";
import GetParticles from "./components/GetParticles";
import Transition from "./components/Transition";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import './App.css'
import transitionOpacity from "./utils/transitionOpacity";

function App() {

  useEffect(() => {
    let container = document.querySelectorAll("#hola");
    transitionOpacity(container, false, true)
  }, []);

  return (<>
    <GetParticles />
    <Navbar />
    <TopHead />
    <div id="hola">
    <Transition />
    <Footer />
    </div>
    <div id="test">HOLA</div>
  </>);
}

export default App;
