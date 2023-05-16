import GetParticles from "./components/GetParticles";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Principal from "./components/Principal";
import About from "./components/About";
import BtnsGitLink from "./components/BtnsGitLink";

function App() {
  return (
    <>
      <GetParticles />
      <Navbar />
      <BtnsGitLink />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
