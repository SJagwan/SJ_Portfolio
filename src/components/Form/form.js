import React, { Component } from 'react';
import './form.scss';
class form extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            message:"",
            honeypot:" ",
            accessKey:"1ce3055e-c2f6-464d-ba11-0d8e8542a8ec"
           } 
    }

    handleChange=(event)=>{
        const {value,name}=event.target;
        this.setState({[name]:value});

    }
    handleSubmit=async(e)=>{
        e.preventDefault();
        e.target.reset();
        try {
            const res = await fetch('https://api.staticforms.xyz/submit', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  name:this.state.name,
                  email:this.state.email,
                  message:this.state.message,
                  honeypot:this.state.honeypot,
                  accessKey:this.state.accessKey
              }),
            });
            
            const val = await res.json();
           
            if (val.success) {
                alert("Successfully Submitted.");
    
              } else {
                  alert("Submission Failed");
             }
        }catch (e) {
            console.log('An error occurred', e);
        }
        
    }


    render() {
        return (
            <div className="c_message">
                <form className="form" action='https://api.staticforms.xyz/submit' method='post' onSubmit={this.handleSubmit} >
                    <input className="form_input" type="text" name="name" placeholder="Enter your Name..."  onClick={this.handleChange}/>
                    <input  className="form_input" type="text" name="email" placeholder="Enter your Email..."  onClick={this.handleChange}/>
                    <textarea className="form_area" name="message" placeholder="Write something to us..."  onClick={this.handleChange}/>
                    <input className="form_input" type="text" name="honeypot" style={{display: "none"}}/>
                    <button className='button' type='submit'>Submit</button>
                </form>
                
                
                
            </div>
        );
    }
}

export default form;