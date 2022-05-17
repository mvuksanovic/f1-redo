import React, { useContext } from 'react';
import bckgrnd from './../img/f1.gif';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
const Home = () => {
   
   const theme = useContext(ThemeContext)
    let navigate=useNavigate()
   setTimeout(()=> {navigate('/drivers', { replace: true })}, 2000);
    
    var sectionStyle = {filter: "blur(4px) opacity(10%)"};
    return (
        <div className={"flex-fill align-items-center tableDiv rounded m-1 p-1 bg-"+theme.theme}>
        <img width="100%" style={sectionStyle} src={bckgrnd} alt="car driving loader"></img>    
        
        </div>
    );
}

export default Home;