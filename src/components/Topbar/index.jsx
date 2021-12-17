import './styles.scss';


export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={`topbar ${menuOpen ? "active" : ""}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="itemContainer">
            <span className="material-icons">person</span>
            <span className="itemContent"> 0683740265</span>
          </div>
          <div className="itemContainer">
            <span className="material-icons">mail</span>
            <span className="itemContent"> jeanlouis.herve@hotmail.fr</span>
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
