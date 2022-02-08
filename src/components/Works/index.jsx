import './styles.scss';
import { useState } from "react";
import { workData } from '../../data.js';
import findImgByKey from '../../utils/img';

//import icons from react-icons
import { Tooltip } from '@mui/material';
import { IconContext } from "react-icons";
import { FaChalkboardTeacher, FaGithub, FaChrome, FaSass, FaReact, FaHtml5, FaCss3Alt, FaPhp, FaBootstrap, FaCcStripe, FaNodeJs} from 'react-icons/fa';
import { SiRedux, SiReactrouter, SiFirebase, SiMysql, SiJavascript, SiStyledcomponents, SiMongodb, SiExpress } from 'react-icons/si'
import { MdWeb } from 'react-icons/md'
import { HiStatusOffline } from 'react-icons/hi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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
                <div className="year"><p>{d.year}</p></div>
                <div className="imgContainer">
                <><IconContext.Provider  value={{ color: "black", size: "2em" }}><MdWeb/></IconContext.Provider></>
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p> 
                <div className="technologies">
                 { d.technologies &&
                  d.technologies.map((item, index) => (
                    ((item === "SASS") ? <><Tooltip title={item} followCursor={true}><div key={index} className="technology" ><IconContext.Provider value={{ color: "black", size: "2em" }}><FaSass/></IconContext.Provider></div></Tooltip></> : null) ||
                    ((item === "React") ? <><Tooltip title={item} followCursor={true}><div key={index} className="technology" ><IconContext.Provider title={item} value={{ color: "black", size: "2em" }}><FaReact/></IconContext.Provider></div></Tooltip></> : null) ||
                    ((item === "Redux") ? <><Tooltip title={item} followCursor={true}><div key={index} className="technology" ><IconContext.Provider title={item} value={{ color: "black", size: "2em" }}><SiRedux/></IconContext.Provider></div></Tooltip></> : null) ||
                    ((item === "HTML") ? <><Tooltip title={item} followCursor={true}><div key={index} className="technology" ><IconContext.Provider title={item} value={{ color: "black", size: "2em" }}><FaHtml5/></IconContext.Provider></div></Tooltip></> : null) ||
                    ((item === "CSS") ? <><Tooltip title={item} followCursor={true}><div key={index} className="technology" ><IconContext.Provider title={item}  value={{ color: "black", size: "2em" }}><FaCss3Alt/></IconContext.Provider></div></Tooltip></> : null) ||
                    ((item === "React-router-dom") ? <><Tooltip title={item} followCursor={true}><div key={index} className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><SiReactrouter/></IconContext.Provider></div></Tooltip></> : null) ||
                    ((item === "Firebase") ? <><Tooltip title={item} followCursor={true}><div key={index} className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><SiFirebase/></IconContext.Provider></div></Tooltip></> : null) ||
                    ((item === "PHP") ? <><Tooltip title={item} followCursor={true}><div key={index} className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><FaPhp/></IconContext.Provider></div></Tooltip></> : null) ||
                    ((item === "Bootstrap") ? <><Tooltip title={item} followCursor={true}><div key={index} className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><FaBootstrap/></IconContext.Provider></div></Tooltip></> : null) ||
                    ((item === "Javascript") ? <><Tooltip title={item} followCursor={true}><div key={index} className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><SiJavascript/></IconContext.Provider></div></Tooltip></> : null) ||
                    ((item === "Styled-Component") ? <><Tooltip title={item} followCursor={true}><div key={index} className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><SiStyledcomponents/></IconContext.Provider></div></Tooltip></> : null) ||
                    ((item === "Stripe") ? <><Tooltip title={item} followCursor={true}><div key={index} className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><FaCcStripe/></IconContext.Provider></div></Tooltip></> : null) ||
                    ((item === "MySQL") ? <><Tooltip title={item} followCursor={true}><div key={index} className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><SiMysql/></IconContext.Provider></div></Tooltip></> : null) ||
                    ((item === "NodeJS") ? <><Tooltip title={item} followCursor={true}><div key={index} className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><FaNodeJs/></IconContext.Provider></div></Tooltip></> : null) ||
                    ((item === "MongoDb") ? <><Tooltip title={item} followCursor={true}><div key={index} className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><SiMongodb/></IconContext.Provider></div></Tooltip></> : null) ||
                    ((item === "Express") ? <><Tooltip title={item} followCursor={true}><div key={index} className="technology" ><IconContext.Provider  value={{ color: "black", size: "2em" }}><SiExpress/></IconContext.Provider></div></Tooltip></> : null) 
                  ))} 
                </div>
                <div className="links">
                  {d.github && <><IconContext.Provider  value={{ color: "black", size: "1.5em" }}><Tooltip title="Github" placement="bottom"><a href={d.github} target="_blank" rel="noreferre"><FaGithub style={{ marginRight: '5px', cursor : 'pointer', color: 'black' }}/></a></Tooltip></IconContext.Provider></>}
                  {d.website 
                    ? <><IconContext.Provider  value={{ color: "black", size: "1.5em" }}><Tooltip title="Site internet" placement="bottom"><a href={d.website} target="_blank" rel="noreferre"><FaChrome style={{ marginRight: '5px', cursor : 'pointer', color: 'black' }}/></a></Tooltip></IconContext.Provider></>
                    : <><IconContext.Provider  value={{ color: "black", size: "1.5em" }}><Tooltip title="Non publié" placement="bottom"><HiStatusOffline style={{ marginRight: '5px', color: 'black' }}/></Tooltip></IconContext.Provider></>
                  }
                  {d.course && d.course ? <><IconContext.Provider  value={{ color: "black", size: "1.5em" }}><Tooltip title="Cours" placement="bottom"><a href={d.course} target="_blank" rel="noreferre"><FaChalkboardTeacher style={{ marginRight: '5px', cursor : 'pointer', color: 'black' }}/></a></Tooltip></IconContext.Provider></> : null}
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
