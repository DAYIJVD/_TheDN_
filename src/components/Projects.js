import React, { useState } from 'react';
import styles from "../css/Projects.module.css"
//icons
import bitcoin from "../assets/bitcoin.svg";
import Code from "../assets/code.svg";
import css from "../assets/css.svg";
import HTML  from "../assets/HTML.svg";
import JS from "../assets/js.svg";
import jvdnrz from "../assets/jvdnrz.svg";
import react from "../assets/react.svg";
import shop from "../assets/shop.svg";
import validate from "../assets/validate.svg";
import web from "../assets/web.svg";
import more from "../assets/more.svg";
import road from "../assets/road.svg";
import Loading from './Loading';


const Projects = () => {
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
        <div className={styles.code}>
        <img alt='poster' src={road} className={styles.road}/>
       <img alt='poster' src={Code} className={styles.CoDE}/>

       <img alt='poster' src={HTML} className={styles.HTML}/>
         <img alt='poster' src={css} className={styles.css}/>

         <img alt='poster' src={JS} className={styles.js}/>
         <img alt='poster' src={react} className={styles.React}/>
       </div>
        <div className={styles.left}>
             <ul>
            <li><a className={styles.bitcoin} href='https://cryptoapp985.netlify.app'><img src={bitcoin} alt="t"/><span>BitCoinApp</span></a></li>
            <li><a className={styles.jvdnrz} href='https://jvdnrz.netlify.app'><img src={jvdnrz} alt="i"/><span>JvdNrzApp</span></a>  </li>
            <li><a className={styles.shop} href='https://shoppingcard-nrzjvd.netlify.app'><img src={shop} alt="g"/><span>ShoppingCartApp</span> </a></li>
             </ul>
        
         <div className={styles.right}>
             <ul  dir='rtl'>
            <li><a className={styles.validate} href='https://validationformjvdnrz.netlify.app'><img src={validate} alt="t"/><span>ValidationFormApp</span></a></li>
            <li><a className={styles.web} href='https://totorial-web.netlify.app'><img src={web} alt="i"/><span>TotoRialWeb</span></a>  </li>
            <li><a className={styles.more} href='https://github.com/DAYIJVD'><img alt="l" src={more}/> <span>More...!</span> </a></li>
             </ul>
         </div>
        </div>
        </div>
     </div>
);}
};

export default Projects;