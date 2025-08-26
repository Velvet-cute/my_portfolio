import React, { useState } from 'react';
import './navbar.css';
import logo from '../../Assets/r-logo.png';
import contactIcn from '../../Assets/contact.png';
import MenuIcon from '../../Assets/menu.png';
import { Link } from 'react-scroll';


const NavBar= () => {
    const [showMenu, setShowMenu] = useState(false);
    return(
        <nav className="NavBar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass="active" to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactIcn} alt="ContactIcon" className="desktopMenuImg"/>Contact Me</button>

                <img src={MenuIcon} alt="Menu" className='mobMenu'  onClick={()=>setShowMenu(!showMenu)}/>
                <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-60} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
                <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default NavBar;