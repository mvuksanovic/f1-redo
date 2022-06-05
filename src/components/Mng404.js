import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Loader from './Loader';

function Mng404() {
    const {theme} = useContext(ThemeContext)
    
    const divThemeClass = theme.variant==="dark"? "bg-dark text-white" : "bg-light text-black"
    return (
        <div className={"d-flex flex-fill m-1 p-1 h-100 rounded "+divThemeClass}>
            <h5>Page not found...</h5>
            <Loader />
        </div>
    );
}

export default Mng404;