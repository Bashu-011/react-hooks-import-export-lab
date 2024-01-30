import React from "react";
import About from "./About";
import NavBar from "./NavBar";
import Home from "./Home";
import{username, city, image} from "/home/bashu_011/Development/phase_2/react-hooks-import-export-lab/src/data/user.js"

function App() {
  return (
    <div>
      <NavBar />
      <Home username={username} city={city}/>
      <About image={image}/>
    </div>
  );
}

export default App;
