import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Bio() {
  return (
    <div id="home">
      <div className="item" data-aos="zoom-in">
        <center>
          <img
            src="bio img.jpg"
            style={{ width: "200px", height: "200px", borderRadius: "100%",border:'10px solid white' }}
            className="biopic"
            alt=""
          />
        </center>
      </div>
      <center>
        <h1 style={{margin:'1% 0'}}>Hello!! I'm Deepak</h1>
      </center>
      <center>
        <h5><span style={{color:'rgb(237, 81, 24)',fontSize:'larger'}}>&lt;</span> A Developer who loves to build cool things <span style={{color:'rgb(237, 81, 24)',fontSize:'larger'}}>/&gt;</span></h5>
        <h5><span style={{color:'rgb(237, 81, 24)',fontSize:'larger'}}>&lt;</span> Flutter Developer, Web Developer And Web Designer<span style={{color:'rgb(237, 81, 24)',fontSize:'larger'}}>/&gt;</span></h5>
        <h5><span style={{color:'rgb(237, 81, 24)',fontSize:'larger'}}>&lt;</span>Self Learner<span style={{color:'rgb(237, 81, 24)',fontSize:'larger'}}>/&gt;</span></h5>
      </center>
    </div>
  );
}
