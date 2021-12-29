import './styles.scss';
import { useState } from "react";
import { IconContext } from "react-icons";
import { FaGithub} from 'react-icons/fa';
import { MdWeb } from 'react-icons/md'
import { HiStatusOnline, HiStatusOffline } from 'react-icons/hi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
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
            <div className="online">
              {
                d.online 
                ? <><IconContext.Provider  value={{ color: "green", className: "global-class-name", size: "2em" }}><HiStatusOnline /> </IconContext.Provider></>
                : <><IconContext.Provider  value={{ color: "red", className: "global-class-name", size: "2em" }}><HiStatusOffline/></IconContext.Provider></>
              }
             </div>
            <div className="left">
              <div className="leftContainer">
                
                <div className="imgContainer">
                  <img src={findImgByKey(d.icon)} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p> 
                {/* <span>Technologies :
                {
                 d && d.technologies && d.technologies.map(() => (

                  ))
                }
                </span> */}
                <div className="links">
                  {d.github && <><IconContext.Provider  value={{ color: "red", className: "global-class-name", size: "2em" }}><a href={d.github} target="_blank" ><FaGithub style={{ height : '24px', marginRight: '5px', cursor : 'pointer', color: 'black' }}/></a></IconContext.Provider></>}
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
