import "./app.scss";
import { useState } from 'react';

import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
import Topbar from "./components/Topbar";
import Works from "./components/Works";
import Intro from "./components/Intro";
import Menu from "./components/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        {/* <Testimonials /> */}
        <Contact />
     </div>
    </div>
  );
}

export default App;
