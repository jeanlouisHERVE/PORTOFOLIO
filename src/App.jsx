import "./app.scss";
import { useState, useEffect } from 'react';

import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
import Topbar from "./components/Topbar";
import Works from "./components/Works";
import Intro from "./components/Intro";
import Menu from "./components/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  
  useEffect(() => {
    const screenWidth = window.innerWidth; 
    const screenSize = ( width ) => {
      if (width < 600 ) {setMobile(true)} 
      return setMobile
      }
    screenSize(screenWidth)
    console.log(mobile)
  }, []);

  console.log(mobile)
  return (
    <div className="App">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
        <Intro />
        <Portfolio />
        { mobile ? null : <Works />} 
        {/* <Testimonials /> */}
        <Contact />
     </div>
    </div>
  );
}

export default App;
