import React,{useState} from 'react';
import Loading from './Loading';
//css
import styles from "../css/Contact.module.css";
//icons
import telegram from "../assets/telegram.svg"
import instagram from "../assets/instagram.svg"
import github from "../assets/github.svg"
//poster
import poster from "../assets/contact.jpg"
const Contact = () => {
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
            <div>
                <ul>
                    <li className={styles.way}>Social pages for communication:</li>
               <li><a className={styles.telegram} href='@'><img src={telegram} alt="t"/><span>Telegram</span></a></li>
               <li><a className={styles.instagram} href='@'><img src={instagram} alt="i"/><span>Instagram</span></a>  </li>
               <li><a className={styles.github} href='https://github.com/DAYIJVD'><img src={github} alt="g"/><span>Github</span> </a></li>
                </ul>
            </div>
            <img alt='poster' src={poster} className={styles.poster}/>
           </div>
        </div>
    );
};
}
export default Contact;