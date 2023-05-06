import React ,{useState} from 'react';
import styles from "../css/About.module.css";
import Loading from './Loading';
import jvdnrz from "../assets/JVDNRZ.png"
import Code from "../assets/code.svg";
import css from "../assets/css.svg";
import HTML  from "../assets/HTML.svg";
import JS from "../assets/js.svg";
import react from "../assets/react.svg";

const About = () => {
    const [Load,setLoad]=useState("");
  setTimeout(()=>{
    setLoad("!Load")
  },600)
    if(!Load.length){
      return(<Loading/>);
    }else{
    return (
        <div className={styles.conteiner}>
            <div className={styles.content}>
            <div className={styles.textParagraf}>
             <h1>Hi,Im DN</h1>
               <h4><span>FrontEnd</span> Developer</h4>
               <p>Hi, I'm Javad with the nickname DN
I am twenty years old and I am from Iran and live in Shiraz
In general, I have enough familiarity with html, css and js programming languages, and in addition, I also worked with the react framework from JavaScript and I work as a react developer .</p>
             </div>
             <div className={styles.code}>
             <img alt='poster' src={Code} className={styles.CoDE}/>
              <img alt='poster' src={HTML} className={styles.HTML}/>
              <img alt='poster' src={css} className={styles.css}/>

             <img alt='poster' src={JS} className={styles.js}/>
             <img alt='poster' src={react} className={styles.React}/>
             </div>
             <img className={styles.poster} alt='poster' src={jvdnrz}/>
        
            </div>
        </div>
    );
};
}
export default About;