import "./app.scss";
import { useState, useEffect } from 'react';

import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
import Topbar from "./components/Topbar";
import Works from "./components/Works";
import WorksMobile from './components/WorksMobile';
import Intro from "./components/Intro";
import Training from "./components/Training";
import Menu from "./components/Menu";

function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
  }, [])
  return width
}



function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const widthScreen = useWindowSize();

  const renderComponent = () => {
    if (widthScreen < 700) {
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
        <Training />
        {/* <Testimonials /> */}
        <Contact />
     </div>
    </div>
  );
}

export default App;
