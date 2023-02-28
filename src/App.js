import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import N from "./Nav";
import B from "./Bio";
import S from "./skills";
import E from "./experience"
import P from "./projects"
import C from "./contact"
import PA from "./particles"
import D from "./drop"
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
    AOS.refresh();
  }, []);
  return (
    <div style={{zIndex:'10'}}>
      <button className="btn ups" style={{padding:'0%',borderRadius:'50%',position:'fixed',bottom:'7%',right:'6%',zIndex:'20',border:'0px',boxShadow:'0 0px 10px 1px rgb(237, 81, 24)'}}><a href="#home"><img style={{width:'90%',zIndex:'4',borderRadius:'50%',backgroundColor:'rgb(237, 81, 24)'}} src="https://cdn.iconscout.com/icon/free/png-256/home-815-457353.png?f=webp&w=128"></img></a></button>
      
      <N />
      <B />
      <center><hr style={{borderTop:'dotted 10px',color:'rgb(217, 70, 16)',opacity:'0.8'}}></hr></center>
      <S />
      <center><hr style={{borderTop:'dotted 10px',color:'rgb(217, 70, 16)',opacity:'0.8'}}></hr></center>
      <E />
      <center><hr style={{borderTop:'dotted 10px',color:'rgb(217, 70, 16)',opacity:'0.8'}}></hr></center>
      <P />
      <center><hr style={{borderTop:'dotted 10px',color:'rgb(217, 70, 16)',opacity:'0.8'}}></hr></center>
      <C />
      <D />
      <PA />
    </div>
  );
}
export default App;
