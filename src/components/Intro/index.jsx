import './styles.scss';
import { init } from "ityped";
import { useEffect, useRef } from "react";
import findImgByKey from "../../utils/img"
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
          <div className="imgContent" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Bonjour, je suis</h2>
          <h1>Jean-Louis HERVE</h1>
          <h3>
             <span ref={textRef}></span> Front-End Développeur
          </h3>
        </div>
        <a href="#portfolio">
          <img src={findImgByKey('arrowDown')} alt="arrow down" />
        </a>
      </div>
    </div>
  );
}