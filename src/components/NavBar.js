import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Logo from './../img/logoF1-1.gif';
import F1flag from '../img/flag-grey.png';
import Helmet from '../img/helmet-grey.png';
import Car from '../img/car-grey.png';

function NavBar() {
    return (
        <div className="col-md-2 navbar-expand-md sticky-top bg-dark m-1 p-1 rounded">
            <div className="navBar navbar-expand-md sticky-top bg-dark m-1 p-1 rounded">
                <div className="navIconContainer d-flex flex-fill flex-md-column">
                    <Link className="col-2 col-md-12 mr-auto p-1" to="/"><img src={Logo} width="100%" alt="logo"/></Link>
                    <Link to="/Drivers"><Button variant="secondary" className="sta" size="md"><img width="40px" src={Helmet} alt="helmet"/> Drivers</Button></Link>
                    <Link to="/Teams"><Button variant="secondary" className="sta" size="md"><img width="40px" src={Car} alt="car"/> Teams</Button></Link>
                    <Link to="/Races"><Button variant="secondary" className="sta" size="md"><img width="40px" src={F1flag} alt="flag"/> Races</Button></Link>


                </div>
            </div>
        </div>
    );
}

export default NavBar;