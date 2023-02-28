import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
export default function D(){
    return(
        <div>
        <center><hr style={{borderTop:'dotted 10px',color:'rgb(217, 70, 16)',opacity:'0.8'}}></hr></center>
        <div className="drop">
            <a style={{textDecoration:'none',color:'white'}}  href="#skills"><button className="btn btn-dark">SKILLS</button></a>
            <a style={{textDecoration:'none',color:'white'}}  href="#experience"><button className="btn btn-dark">EXPERIENCE</button></a>
    <a style={{textDecoration:'none',color:'white'}}  href="#projects">        <button className="btn btn-dark">PROJECTS</button></a>
        </div> 
        <center><p>© 2023 <span style={{opacity:'0.5'}}>NALLAM DEEPAK</span><br />All Rights Reserved</p></center>
        </div>
 
    );
}