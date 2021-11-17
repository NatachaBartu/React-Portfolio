import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";
import { TechSkills } from "./pages/TechSkills";
import { GetInTouch } from "./pages/GetInTouch";
import { NoMatch } from "./components/NoMatch";
import { Layout } from "./components/Layout";
import { Footer } from "./components/Footer";
const App = () => {
  return (
    <>
      <MenuBar />

      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<AboutMe />}></Route>
            <Route exact path="/skills" element={<TechSkills />}></Route>
            <Route exact path="/contact" element={<GetInTouch />}></Route>
            <Route exact path="/projects" element={<Projects />}></Route>
            <Route element={<NoMatch />}></Route>
          </Routes>
        </Router>
      </Layout>
      <Footer />
    </>
  );
};
export default App;
