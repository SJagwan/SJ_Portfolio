import React, { Component } from 'react';
import './Page.scss';
import Header from './../components/Header/header';
import About from './../components/About/about';
import AboutMe from './../components/AboutMe/aboutme';
import Projects from './../components/Projects/projects';
import Contact from './../components/Contact/contact';
import Footer from './../components/Footer/footer';

class Page extends Component {
    render() {
        return (
            <div className="page">
                <Header/>
                <About/>
                <AboutMe/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default Page;