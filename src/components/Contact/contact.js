import React from 'react';
import './contact.scss'
import Form from './../Form/form';

const contact = () => {
    return (
        <div className="contact">
            <h1 className="contact_h1">Contact</h1>
            <h3 className="contact_h3">Have a project for me? Think I'd be a good fit for your team? I'd love to hear from you.</h3>
            <div className="contact_div">
               <Form/>
               <div className="div_div">
                   <h3 className="div_h3">Address and Phone</h3>
                   <p className="div_p">Uttrakhand,India</p>
                   <p className="div_p">+918439830083</p>
                   <p className="div_p">shubhanshu1997jagwan@gmail.com</p>
               </div>
                
            </div>
            <p className="contact_note">Note : The above link do not send message to me ( using staticform.xyz api ) .If you want to contact me ,directly mail using email address provided.</p>
            
            
        </div>
    );
};

export default contact;