import React,{useState} from 'react';
import Loading from './Loading';
//pictures
import poster from "../assets/poster.png"
// css
import styles from "../css/Home.module.css"
import { NavLink } from 'react-router-dom';
const Home = () => {
    const [Load,setLoad]=useState("");
    setTimeout(()=>{
      setLoad("!Load")
    },4000)
      if(!Load.length){
        return(<Loading/>);
      }else{
    return (
        <div className={styles.conteiner}>
            <div className={styles.textHome}>
              <h1>Hi,Im DN</h1>
              <h2><span>FrontEnd</span> Developer</h2>
               <p>Hi,I'm Javad aka DN....</p>
              <NavLink to="/about"> <button>About</button></NavLink>
            </div>
            <img alt='poster' src={poster}/>
        </div>
    )
}
}
export default Home;