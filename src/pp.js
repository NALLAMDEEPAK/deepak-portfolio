import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
export default function PP(props){
  return(
    <div>
       <div className="pdiv item" data-aos={props.style}  style={{overflow:'hidden',position:'relative',backgroundColor:'#121212'}}>
       <img className="pdivimg" src={props.img}></img>
       <h2 style={{margin:'0 0 4% 4%'}}><span style={{color:'rgb(237, 81, 24)'}}>{props.header}</span>{props.her}</h2>
       <p style={{margin:' 0 4%',lineHeight:'2'}}>{props.content}</p>
       <a style={{position:'absolute',bottom:'3%',left:'4%',textDecoration:'none',color:'white'}} href={props.git} target="blank"><img style={{width:'20%',borderRadius:'50%',backgroundColor:'white'}} src="https://cdn.iconscout.com/icon/free/png-64/github-163-761603.png"></img><span></span><span style={{color:'rgb(237, 81, 24)',marginLeft:'10%'}}>G</span>ithub</a>
       <a style={{position:'absolute',bottom:'3%',right:'15%',textDecoration:'none',color:'white'}} href={props.link} target="blank"><img style={{width:'25%',position:'absolute',bottom:'23%',right:'105%',textDecoration:'none'}} src="https://cdn.iconscout.com/icon/free/png-256/running-1869010-1585103.png?f=webp&w=128"></img><span style={{color:'rgb(237, 81, 24)'}}>L</span>ive <span style={{color:'rgb(237, 81, 24)'}}>H</span>ere</a>
       </div>
    </div>
  );
}