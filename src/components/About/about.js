import React, { Component } from 'react';
import './about.scss';

import linkedin from './../../assests/linkedin.png'
import github from './../../assests/github.png';
import {Link} from 'react-scroll';
class About extends Component {
    render() {
        return (
            <div className="about" id="about">
                <div className="about_text">
                        <h1 className="about_h1">Hello ,My name is <span className="about_span_h1"> Shubhanshu</span></h1>
                        <h3 className="about_h3">I'm a <span className="about_span_h3">Web-Developer</span></h3>
                        <Link to="aboutme" smooth="easeInOutQuad" className="about_l"><p className="about_p">Learn more</p></Link>
                        <div className="about_div">
                            <a href="https://github.com/SJagwan" target="blank"><img src={github} width="25px" height="25px"  alt="github"/></a>
                            <a  href="https://www.linkedin.com/in/shubhanshu-jagwan/" target="blank"><img src={linkedin} width="25px" height="25px"  alt="linked"/></a>
                        </div>
                        
                </div>
                <div className="about_img">  </div>
                
            </div>
        );
    }
}

export default About;