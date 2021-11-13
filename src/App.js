import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { TechSkills } from "./components/TechSkills";
import { GetInTouch } from "./components/GetInTouch";
import { NoMatch } from "./components/NoMatch";
import { Layout } from "./components/Layout.js";

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
            <Route element={<NoMatch />}></Route>
          </Routes>
        </Router>
      </Layout>
    </>
  );
};
export default App;
