import GetParticles from "./components/GetParticles";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Principal from "./components/Principal";
import About from "./components/About";
import BtnsGitLink from "./components/BtnsGitLink";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <GetParticles />
      <Navbar />
      <BtnsGitLink />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
