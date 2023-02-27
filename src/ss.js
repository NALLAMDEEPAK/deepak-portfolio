import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
export default function ss(props) {
  return (
    <div className="sadiv">
      <div className="sdiv">
        <img style={props.style} src={props.img} alt="skills" />
      </div> 
      <center><p>{props.name}</p></center>
    </div>
     

    

  );
}
