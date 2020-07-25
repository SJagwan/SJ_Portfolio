import React from 'react';
import './box.scss'

const Box = ({ImageUrl,title,discription,skill,link,codelink}) => {
    return(
        <div className="box">
            <div className="box_img" style={{backgroundImage:`url(${ImageUrl})`}}>

            </div>
            <div className="box_detail">
                <h1  className="box_name">{title}</h1>
                <p className="box_about">{discription}</p>
                <p className="box_skill">{skill}</p>
                <div className="box_button">
                    <a href={link} target="blank"><button className="box_same">Live</button></a>
                    <a href={codelink} target="blank"><button className="box_same">Code</button></a>
                </div>
            </div>
        </div>
            
    );
}

export default Box;