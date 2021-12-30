import './styles.scss';
import profil from "./profil.jpg";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["React", "Javascript", "PHP"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <div className="imgContent" style={{height:"500px", width:"500px", borderRadius:"50%", backgroundImage: `url(${profil})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Bonjour, je suis</h2>
          <h1>Jean-Louis HERVE</h1>
          <h3>
             <span ref={textRef}></span> Front-End Developpeur
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}