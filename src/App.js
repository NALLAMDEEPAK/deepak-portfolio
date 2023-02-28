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
      <button className="btn" style={{width:'70px',height:'70px',padding:'0%',borderRadius:'50%',position:'fixed',bottom:'7%',right:'6%',zIndex:'20',border:'0px',boxShadow:'0 0px 10px 1px rgb(237, 81, 24)'}}><a href="#home"><img style={{width:'100%',zIndex:'4',borderRadius:'50%',backgroundColor:'rgb(237, 81, 24)'}} src="data:image/png;base64,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"></img></a></button>
      
      <N />
      <B />
      <S />
      <E />
      <P />
      <C />
      <D />
      <PA />
    </div>
  );
}
export default App;
