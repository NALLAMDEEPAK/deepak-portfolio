import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
export default function Nav() {
  return (
    <div className="n">
    <nav className="navbar navbar-expand-lg">
    <a style={{marginLeft:'3%',fontSize:'200%'}} className="navbar-brand" href="#"><span style={{fontWeight:'700',letterSpacing:'4px'}}><span style={{color:"black"}}>D</span>EEPAK</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav sticky-top ">
    <li className="nav-item i">
    <a className="nav-link" href="#home">HOME</a>
    </li>
    <li className="nav-item i">
    <a className="nav-link" href="#skills">SKILLS</a>
    </li>
    <li className="nav-item i">
    <a className="nav-link" href="#experience">EXPERIENCE</a>
    </li>
    <li className="nav-item i">
    <a className="nav-link" href="#projects">PROJECTS</a>
    </li>
    <li className="nav-item i">
    <a className="nav-link" href="#contact">CONTACT</a>
    </li>
    </ul>
    </div>
    </nav>
    </div>
  );
}
