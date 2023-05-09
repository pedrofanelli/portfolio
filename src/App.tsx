import TopHead from "./components/TopHead";
import GetParticles from "./components/GetParticles";
import Transition from "./components/Transition";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// import './App.css'

function App() {

  return (<>
    <GetParticles />
    <Navbar />
    <TopHead />
    <Transition />
    <Footer />
  </>);
}

export default App;
