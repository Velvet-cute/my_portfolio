import React from 'react';
import './intro.css';
import backgrondImg from '../../Assets/image.png'
import { Link } from 'react-scroll';
import btnImage from '../../Assets/hireme.png'


const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm<span className="introName"> Rusty</span><br/>Website Developer</span>
                <p className="introPara">I am a Junior Programmer with entry level experience in <br/>creating user friendly websites.</p>
                <Link><button className="btn"><img src={btnImage} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src={backgrondImg} alt="Profile" className="bg"/>
        </section>
    )
}

export default Intro;