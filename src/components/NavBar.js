import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Logo from './../img/logoF1-1.gif';
import F1flag from '../img/flag-grey.png';
import Helmet from '../img/helmet-grey.png';
import Car from '../img/car-grey.png';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function NavBar() {
    
    const theme = useContext(ThemeContext)
    const themeColor = theme.theme.variant
    return (
        <div className={"col-md-2 navbar-expand-md sticky-top m-1 p-1 rounded bg-"+themeColor}>
            <div className={"navBar navbar-expand-md sticky-top m-1 p-1 rounded bg-"+themeColor}>
                <div className="navIconContainer d-flex flex-fill flex-md-column">
                    <Link className="col-2 col-md-12 mr-auto p-1" to="/"><img src={Logo} width="70%" alt="logo"/></Link>
                    <Link to="/drivers" className='m-1'><Button variant="secondary" className="sta" size="md"><img width="20px" src={Helmet} alt="helmet"/> Drivers</Button></Link>
                    <Link to="/teams" className='m-1'><Button variant="secondary" className="sta" size="md"><img width="20px" src={Car} alt="car"/> Teams</Button></Link>
                    <Link to="/races" className='m-1'><Button variant="secondary" className="sta" size="md"><img width="20px" src={F1flag} alt="flag"/> Races</Button></Link>


                </div>
            </div>
        </div>
    );
}

export default NavBar;