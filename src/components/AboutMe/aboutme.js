import React from 'react';
import './aboutme.scss'
// import aboutme from './../../assests/aboutme.png';
import {Link} from 'react-scroll';

const Aboutme = () => {
    return (
        <div id="aboutme picka" className="aboutme">
            <div className="aboutme_ill">
                {/* <img src={aboutme} alt="aboutme" width="800px" height="400px"/> */}
            </div>
            <div className="aboutme_text"> 
                <h1 className="aboutme_h1">About Me</h1>
                <p className="aboutme_p">Hello! I'm Shubhanshu Jagwan. I belong to Uttkrakhand,India.I am a CSE student at SRMIST.</p><br/>
                <p className="aboutme_p">I like building websites.
                    I'm self-directed and motivated full-stack software developer experienced
                    in working effectively in dynamic environments.</p><br/>
                <Link to="contact" smooth="easeInOutQuad" offset={-50}><div className="aboutme_button">Contact</div></Link>

            </div>
           
            
        </div>
    );
};

export default Aboutme;