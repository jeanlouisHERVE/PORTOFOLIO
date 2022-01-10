import "./app.scss";
import { useState, useEffect } from 'react';

import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
import Topbar from "./components/Topbar";
import Works from "./components/Works";
import WorksMobile from './components/WorksMobile';
import Intro from "./components/Intro";
import Menu from "./components/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  
  const renderComponent = () => {
    if (width < 600) {
      return <WorksMobile/>;
    } else {
      return <Works />;
    }
  }
    
  return (
    <div className="App">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
        <Intro />
        <Portfolio />
        {renderComponent()} 
        {/* <Testimonials /> */}
        <Contact />
     </div>
    </div>
  );
}

export default App;
