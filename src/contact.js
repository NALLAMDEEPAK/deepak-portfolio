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

         <form action="mailto:deepaknallam3@gmail.com">
          <div className="form-group">
           <label>Name:</label>
           <input className="form-control" style={{width:'70%',boxShadow: '0 0 4px rgba(0,0,0,.4)'}} type="text" placeholder="Your Name"></input>
            <label>E-Mail</label>
           <input className="form-control" type="mail" style={{width:'70%',boxShadow: '0 0 4px rgba(0,0,0,.4)'}} placeholder='Your E-Mail'></input>
            <label>Message:</label>
           <textarea className="form-control fc" style={{width:'70%',resize:'none',overflowY:'auto',boxShadow: '0 0 4px rgba(0,0,0,.4)'}} placeholder='Your Message' rows='5' cols="5"></textarea>
            <button className="form-control btn btn-dark" style={{width:'70%',marginTop:'5%'}} type="submit">Send</button>
         </div>
           
         </form>
        </div>
        <div className="col-lg-6 conimg" style={{overflow:'hidden',padding:'0%'}}>
        <img style={{width:'110%'}} src="cont.jpg"></img>
        </div>
        </div>
        </div>
        


    
    );
}