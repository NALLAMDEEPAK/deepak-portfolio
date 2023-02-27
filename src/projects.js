import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Pi from "./pp"
import allprojects from "./allprojects"
function op(po){    
    return  <Pi img={po.img} style={po.style} header={po.head} her={po.her} content={po.content} git={po.git} link={po.link} />; 
}

export default function Pro(){

    return(
      <div id="projects">
            <div className="skillstag item" data-aos="fade-right">
    <h2>
    <span>&lt;projects&gt;</span>
    </h2>
    </div>
    <div className="prdiv">
        {allprojects.map(op)}
      </div>
    <div className="skillstag item" data-aos="fade-right">
    <h2>
    <span>&lt;/projects&gt;</span>
    </h2>
    </div>
      </div>

    );
}