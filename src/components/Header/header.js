import React from 'react';
import './header.scss';
import {ReactComponent as Icon} from './../../assests/icon.svg'
import {Link,animateScroll as scroll} from 'react-scroll';

const Header= ()=> {
    return (
        <div id="header" className="header">
            <nav className="header_nav"> 
                <Icon onClick={()=> scroll.scrollToTop()} className="icon"/>
                <ul className="nav">
                    <Link to="aboutme" smooth="easeInOutQuad" offset={-50}><li className="nav_list">About</li></Link>
                    <Link to="project" smooth="easeInOutQuad" offset={-50}><li className="nav_list">Project</li></Link>
                    <Link to="contact" smooth="easeInOutQuad" offset={-50}><li className="nav_list">Contact</li></Link>
                </ul>
            </nav>
            
        </div>
    );
}

export default Header;