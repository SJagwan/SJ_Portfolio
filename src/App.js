import React from 'react';
import './App.scss';

import Page from './Pages/Page'



class App extends React.Component {

  componentDidMount(){
        const aboutMe=document.getElementById("about");
        const header1=document.getElementById("header");

        const options={
          threshold:0.3,
          // rootMargin:"0px 0px 0px 0px"
        };
        const observerHeader= new IntersectionObserver(function(entries,observerHeader){
            entries.forEach(entry => {
              
              if(!entry.isIntersecting)
              {
                header1.classList.add("header_new");
              }
              else{
                header1.classList.remove("header_new");
              }
            });

        },options);

        observerHeader.observe(aboutMe); 
  }


  render() {
    return (
      <div className="App">
        <Page/>
      </div>
    );
  }
}
export default App;
