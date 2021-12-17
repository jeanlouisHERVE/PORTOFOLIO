import "./app.scss";

import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Topbar from "./components/Topbar";
import Works from "./components/Works";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
     <Topbar />
     <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
     </div>
    </div>
  );
}

export default App;
