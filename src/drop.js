import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
export default function D(){
    return(
        <div>
        <div className="drop">
            <a style={{textDecoration:'none',color:'white'}}  href="#skills"><button className="btn btn-dark">SKILLS</button></a>
            <a style={{textDecoration:'none',color:'white'}}  href="#experience"><button className="btn btn-dark">EXPERIENCE</button></a>
    <a style={{textDecoration:'none',color:'white'}}  href="#projects">        <button className="btn btn-dark">PROJECTS</button></a>
        </div> 
        </div>
 
    );
}