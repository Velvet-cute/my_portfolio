import React from "react";
import './work.css';
import Portfolio1 from '../../Assets/portfolio-1.png';
import Portfolio2 from '../../Assets/portfolio-2.png';
import Portfolio3 from '../../Assets/portfolio-3.png';
import Portfolio4 from '../../Assets/portfolio-4.png';
import Portfolio5 from '../../Assets/portfolio-5.png';
import Portfolio6 from '../../Assets/portfolio-6.png';

const Works = () => {
    return(
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="workDesc">These are my recent develop applications, websites and other requests by my clients. You can free to look about my performance, designs, outputs and it's user-friendly applcations. All of these results came from my hardwork and passionated skills when it comes to development.</span>
            <div className="workImgs">
                <img src={Portfolio1} alt="" className="worksImg"/>
                <img src={Portfolio2} alt="" className="worksImg"/>
                <img src={Portfolio3} alt="" className="worksImg"/>
                <img src={Portfolio4} alt="" className="worksImg"/>
                <img src={Portfolio5} alt="" className="worksImg"/>
                <img src={Portfolio6} alt="" className="worksImg"/>
            </div>
            <button className="workBtn">See more</button>
        </section>
    );
    

}

export default Works;