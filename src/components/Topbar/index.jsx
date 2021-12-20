import './styles.scss';
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={`topbar ${menuOpen ? "active" : ""}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="itemContainer">
            <FaGithub style={{ height : '24px', marginRight: '5px', cursor : 'pointer' }}/>
            <a href='https://github.com/jeanlouisHERVE'><span className="itemContent"> jeanlouisHERVE </span></a>
          </div>
          <div className="itemContainer">
            <FaLinkedinIn style={{ height : '24px', marginRight: '5px', cursor : 'pointer' }}/>
           <a href="https://www.linkedin.com/in/jean-louisherve/"></a> <span className="itemContent"> </span>
          </div>
          
        </div>
        <div className="right">
         <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="draw" />
          <span className="draw" />
          <span className="draw" />
         </div>
        </div>
      </div>
    </div>
  )
}
