import './styles.scss';
import { useState } from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaChrome, FaSass, FaReact, FaHtml5, FaCss3Alt, FaPhp, FaBootstrap} from 'react-icons/fa';
import { MdWeb } from 'react-icons/md'
import { HiStatusOnline, HiStatusOffline } from 'react-icons/hi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { SiRedux, SiReactrouter, SiFirebase } from 'react-icons/si'
import { workData } from '../../data.js';
import findImgByKey from '../../utils/img';

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < workData.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div 
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {workData.map((d) => (
        <div key={d.id} className="container">
          <div className="item">
            {/* <div className="online">
              {
                d.online 
                ? <><IconContext.Provider  value={{ color: "green", className: "global-class-name", size: "2em" }}><HiStatusOnline /> </IconContext.Provider></>
                : <><IconContext.Provider  value={{ color: "#dc143c", className: "global-class-name", size: "2em" }}><HiStatusOffline/></IconContext.Provider></>
              }
             </div> */}
            <div className="left">
              <div className="leftContainer">
                
                <div className="imgContainer">
                <><IconContext.Provider  value={{ color: "black", size: "2em" }}><MdWeb/></IconContext.Provider></>
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p> 
                <div className="technologies">
                 { d.technologies &&
                  d.technologies.map((item, index) => (
                  ((item === "SASS") ? <><div className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><FaSass/></IconContext.Provider></div></> : null) ||
                  ((item === "React") ? <><div className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><FaReact/></IconContext.Provider></div></> : null) ||
                  ((item === "Redux") ? <><div className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><SiRedux/></IconContext.Provider></div></> : null) ||
                  ((item === "HTML") ? <><div className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><FaHtml5/></IconContext.Provider></div></> : null) ||
                  ((item === "CSS") ? <><div className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><FaCss3Alt/></IconContext.Provider></div></> : null) ||
                  ((item === "React-router-dom") ? <><div className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><SiReactrouter/></IconContext.Provider></div></> : null) ||
                  ((item === "Firebase") ? <><div className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><SiFirebase/></IconContext.Provider></div></> : null) ||
                  ((item === "PHP") ? <><div className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><FaPhp/></IconContext.Provider></div></> : null) ||
                  ((item === "Bootstrap") ? <><div className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><FaBootstrap/></IconContext.Provider></div></> : null) 
                  ))} 
                </div>
                <div className="links">
                  {d.github && <><IconContext.Provider  value={{ color: "black", size: "1.5em" }}><a href={d.github} target="_blank" ><FaGithub style={{ marginRight: '5px', cursor : 'pointer', color: 'black' }}/></a></IconContext.Provider></>}
                  {d.website 
                    ? <><IconContext.Provider  value={{ color: "black", size: "1.5em" }}><a href={d.website} target="_blank" ><FaChrome style={{ marginRight: '5px', cursor : 'pointer', color: 'black' }}/></a></IconContext.Provider></>
                    : <><IconContext.Provider  value={{ color: "black", size: "1.5em" }}><HiStatusOffline/></IconContext.Provider></>
                  }
                </div>
              </div>
            </div>
            <div className="right">
                <img 
                  src={findImgByKey(d.img)}
                  alt=""
                />
            </div>
          </div>
        </div>
        ))}
      </div>
      <IoIosArrowBack style={{height: '50px', width:'50px', position: 'absolute', left:'100px', cursor:'pointer'}} onClick={() => handleClick("left")}/>
      <IoIosArrowForward style={{height: '50px', width:'50px', position: 'absolute', right:'100px', cursor:'pointer'}} onClick={() => handleClick()}/>
    </div>
  )
}
