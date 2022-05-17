import React from 'react';
import bckgrnd from './../img/f1.gif';
import { useNavigate } from 'react-router-dom';
const Home = () => {
   let navigate=useNavigate()
   setTimeout(()=> {navigate('/Drivers', { replace: true })}, 2000);
    
    var sectionStyle = {filter: "blur(4px) opacity(10%)"};
    return (
        <div className="flex-fill align-items-center h-90">
        <img width="100%" style={sectionStyle} src={bckgrnd} alt="car driving loader"></img>    
        
        </div>
    );
}

export default Home;