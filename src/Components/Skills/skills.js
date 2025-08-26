import React from "react";
import './skills.css';
import UIDesign from '../../Assets/ui-design.png';
import WebDesign from '../../Assets/website-design.png';
import AppDesign from '../../Assets/app-design.png';

const Skills = () => {
    return(
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">A Web Developer with experience gained through schoolworks, internships and academic projects. Willing to apply the knowledge and skills to contribute to IT team and be able to provide solutions with innovative approach in the company.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>I design and implement to make user-friendly innovative approach to the users and making sure that I met their expectations.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>I making sure that designs are modern and not too shabby. Simple but effective when user sees it.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Application Design</h2>
                        <p>What you see in my website design and UI/UX can be also seen in your mobile application.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;