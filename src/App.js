import React from "react";
import { BrowserRouter } from "react-router-dom";
import MenuBar from "./components/MenuBar";

const App = () => {
  return (
    <BrowserRouter>
      <MenuBar />
      <div>
        <h2>Portfolio Test</h2>
      </div>
    </BrowserRouter>
  );
};
export default App;
