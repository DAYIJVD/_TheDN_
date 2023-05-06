import React, { useEffect,useState} from 'react';
//css
import styles from "../css/Navbar.module.css"
import { NavLink } from 'react-router-dom';
//picture
import play from "../assets/play.svg"
import pause from "../assets/pause.svg"
const Navbar = () => {
    let Music=document.getElementsByTagName("audio");
    const [playing,setplaying]=useState(false)
    useEffect(()=>{
        if(Music[0].played===true){
            setplaying(true)
        }
     Music[0].loop=true
     },[Music])
    const changeplay=()=>{
        if(playing===true){
    setplaying(!playing)
    pauseAudio()
        }
        if(playing===false){
            setplaying(!playing)
            playAudio()
        }
    }
    const playAudio=()=>{
        Music[0].play()
       }
    const pauseAudio=()=>{
        Music[0].pause()
     }
    return (
        <div className={styles.Asli}>
        <div className={styles.conteiner}>
            <audio src="https://audio.jukehost.co.uk/Q0PXLT3JUC3YUjqpu2BcY88qKYXUuuBF"/>
            <h2>TheDN</h2>
            <ul className={styles.list}>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li onClick={changeplay}><img alt="music" src={playing?pause:play}/></li>
            </ul>
        
        </div>
        </div>
    );
};

export default Navbar;