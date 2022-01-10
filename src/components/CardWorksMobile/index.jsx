import './styles.scss';
import findImgByKey from '../../utils/img'

//import icons from react-icons
import { IconContext } from "react-icons";
import { FaGithub, FaChrome, FaSass, FaReact, FaHtml5, FaCss3Alt, FaPhp, FaBootstrap, FaCcStripe} from 'react-icons/fa';
import { SiRedux, SiReactrouter, SiFirebase, SiMysql, SiJavascript, SiStyledcomponents } from 'react-icons/si'

const CardWorksMobile = ({project}) => {
  const {title, desc, technologies, github, mobileImg, website} = project; 
  return(
  <div className="CardWorksMobile--container">
      <div className="CardWorksMobile--header">
        <h1>{title}</h1>
      </div>
      <img src={findImgByKey(mobileImg)} alt=""/>
    <div className="CardWorksMobile--overlay">
      <div className="CardWorksMobile--github">
        {github && <><IconContext.Provider  value={{ color: "black", size: "1.5em" }}><a href={github} target="_blank" rel="noreferre" ><FaGithub style={{cursor : 'pointer', color: 'black' }}/></a></IconContext.Provider></>}
      </div>
      <p>{desc}</p>
      <div className="CardWorksMobile--technologies">
        { technologies &&
        technologies.map((item, index) => (
        ((item === "SASS") ? <><div key={index} className="CardWorksMobile--technology" ><IconContext.Provider title={item} value={{ color: "black", size: "1em" }}><FaSass/></IconContext.Provider></div></> : null) ||
        ((item === "React") ? <><div key={index} className="CardWorksMobile--echnology" ><IconContext.Provider title={item} value={{ color: "black", size: "1em" }}><FaReact/></IconContext.Provider></div></> : null) ||
        ((item === "Redux") ? <><div key={index} className="CardWorksMobile--technology" ><IconContext.Provider title={item} value={{ color: "black", size: "1em" }}><SiRedux/></IconContext.Provider></div></> : null) ||
        ((item === "HTML") ? <><div key={index} className="CardWorksMobile--technology" ><IconContext.Provider title={item} value={{ color: "black", size: "1em" }}><FaHtml5/></IconContext.Provider></div></> : null) ||
        ((item === "CSS") ? <><div key={index} className="CardWorksMobile--technology" ><IconContext.Provider title={item}  value={{ color: "black", size: "1em" }}><FaCss3Alt/></IconContext.Provider></div></> : null) ||
        ((item === "React-router-dom") ? <><div key={index} className="CardWorksMobile--technology" ><IconContext.Provider  value={{ color: "black", size: "1em" }}><SiReactrouter/></IconContext.Provider></div></> : null) ||
        ((item === "Firebase") ? <><div key={index} className="CardWorksMobile--technology" ><IconContext.Provider  value={{ color: "black", size: "1em" }}><SiFirebase/></IconContext.Provider></div></> : null) ||
        ((item === "PHP") ? <><div key={index} className="CardWorksMobile--technology" ><IconContext.Provider  value={{ color: "black", size: "1em" }}><FaPhp/></IconContext.Provider></div></> : null) ||
        ((item === "Bootstrap") ? <><div key={index} className="CardWorksMobile--technology" ><IconContext.Provider  value={{ color: "black", size: "1em" }}><FaBootstrap/></IconContext.Provider></div></> : null) ||
        ((item === "Javascript") ? <><div key={index} className="CardWorksMobile--technology" ><IconContext.Provider  value={{ color: "black", size: "1em" }}><SiJavascript/></IconContext.Provider></div></> : null) ||
        ((item === "Styled-Component") ? <><div key={index} className="CardWorksMobile--technology" ><IconContext.Provider  value={{ color: "black", size: "1em" }}><SiStyledcomponents/></IconContext.Provider></div></> : null) ||
        ((item === "Stripe") ? <><div key={index} className="CardWorksMobile--echnology" ><IconContext.Provider  value={{ color: "black", size: "1em" }}><FaCcStripe/></IconContext.Provider></div></> : null) ||
        ((item === "MySQL") ? <><div key={index} className="CardWorksMobile--technology" ><IconContext.Provider  value={{ color: "black", size: "1em" }}><SiMysql/></IconContext.Provider></div></> : null) 
        ))} 
      </div>
    </div> 
  </div>
  );
}

export default CardWorksMobile 