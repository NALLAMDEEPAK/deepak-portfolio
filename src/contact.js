import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
export default function Contact(){
    return(
    
        <div id="contact">

        <div className="row cf" style={{boxShadow: '0px 0px 10px rgb(237, 81, 24)',borderRadius:'20px',overflow:'hidden',flexWrap:'wrap-reverse'}}>
        <div className="col-lg-5" style={{padding:'0%',margin:' 4% 0 4% 4%'}}>
        <div className="skillsta">
    <h2>
    <span>&lt;Contact /&gt;</span>
    </h2>
    </div>
         <div className="concen">
         <form action="mailto:deepaknallam3@gmail.com">
          <div className="form-group">
           <label>Name:</label>
           <input className="form-control" style={{boxShadow: '0 0 4px rgba(0,0,0,.4)'}} type="text" placeholder="Your Name"></input>
            <label>E-Mail</label>
           <input className="form-control" type="mail" style={{boxShadow: '0 0 4px rgba(0,0,0,.4)'}} placeholder='Your E-Mail'></input>
            <label>Message:</label>
           <textarea className="form-control fc" style={{resize:'none',overflowY:'auto',boxShadow: '0 0 4px rgba(0,0,0,.4)'}} placeholder='Your Message' rows='5' cols="5"></textarea>
            <button className="form-control btn" style={{marginTop:'5%',backgroundColor:'rgb(237, 81, 24)',fontWeight:'700',letterSpacing:'2px',fontSize:'large'}} type="submit">Send</button>
         </div>
           
         </form>
         </div>

        </div>
        <div className="col-lg-6 conimg" style={{overflow:'hidden',padding:'0%'}}>
        <img style={{width:'110%'}} src="cont.jpg"></img>
        </div>
        </div>
        </div>
        


    
    );
}