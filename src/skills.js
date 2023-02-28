import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import C from "./ss";
import allskills from "./allskills";
function con(conn) {
  return <C img={conn.img} name={conn.name} style={conn.style} data={conn.data} />;
}
export default function S() {
  return ( 
    <div id="skills">    <div style={{marginTop:'4%'}} className="item" data-aos="fade-down">
    <div className="skillstag item" data-aos="fade-right">
    <h2>
    <span>&lt;skills&gt;</span>
    </h2>
    </div>
      <div className="allsk">
        {allskills.map(con)}
      </div>
      <div className="skillstag item" data-aos="fade-right">
    <h2> 
    <span>&lt;/skills&gt;</span>
    </h2>
    </div>
    </div></div>

  );
}
