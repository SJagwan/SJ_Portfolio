import React, { Component } from 'react';
import './projects.scss';

import Box from './../Box/box';

const projectd=[

    {
        id:1,
        title:"SJ_Portfolio",
        ImageUrl:'https://ik.imagekit.io/s27s12j97/Portfolio/LP_g_2JLc84L.png',
        link:'',
        codelink:"",
        discription:"This website which you are now seeing is the portfolio.It is a Portfolio website.",
        skill:"Skill that are used in making this projects are React , Javascript , Saas , react-scroll , html , css",
    },
    {
        id:2,
        title:"Crwn-Cloths",
        ImageUrl:'https://ik.imagekit.io/s27s12j97/Portfolio/LC_j-UG3WccGD.png',
        link:'https://crwn-sj.herokuapp.com/',
        codelink:"https://github.com/SJagwan/crwn-clothing",
        discription:"This project under my Udemy course .It is a E-commerce website .You can add items to cart ,Also use stripe api to show payment method ",
        skill:"Skill that are used in making this projects are React , Redux , Redux-Saga , Stripeapi , Firebase,Node.",
    },
    {
        id:3,
        title:"WeatherApp",
        ImageUrl:'https://ik.imagekit.io/s27s12j97/Portfolio/LW_JB2tACBcV45.png',
        link:"https://temptsj.herokuapp.com/",
        codelink:"https://github.com/SJagwan/Weather",
        discription:"This was my first individual project.It is a website which can tell the tempratue of any place.",
        skill:"Skill that are used in making this projects are React , Nodejs , expressjs ,openweatherapi,etc.",
    },
    {
        id:4,
        title:"Space_Deno",
        ImageUrl:'https://ik.imagekit.io/s27s12j97/Portfolio/LN_GTLVCxL1oFrC.png',
        link:'',
        codelink:"",
        discription:"This project is under my Udemy course .In this project we use lastest library Deno.js to create backend server.",
        skill:"Skill that are used in making this projects are Deno(backend) , Oak(server) , JavaScript, html , css",
    },
    {
        id:5,
        title:"SearchRobo",
        ImageUrl:'https://ik.imagekit.io/s27s12j97/Portfolio/LR_LJDo7jRAjM.png',
        link:"https://sjagwan.github.io/Robo/",
        codelink:"https://github.com/SJagwan/Robo",
        discription:"It is a simple project.It will filter the search according to robo name.And only display those robo which name match,what user type.",
        skill:"Skill that are used in making this projects are React,jsonplaceholder api.",
    }
]

class Projects extends Component {
    render() {
        return (
            <div id="project" className="project">
                <h1 className="project_heading">Projects</h1>
                { projectd.map(({id,...otherDataprops})=>(
                    <Box key={id} {...otherDataprops}/>
                ))
                }

                       
            </div>
        );
    }
}

export default Projects;