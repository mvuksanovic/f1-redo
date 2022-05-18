import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Loader from './Loader';

function Mng404() {
    const theme = useContext(ThemeContext)
    return (
        <div className={"d-flex flex-fill m-1 p-1 rounded text-white bg"+theme.theme.variant}>
            <h5>Page not found...</h5>
            <Loader />
        </div>
    );
}

export default Mng404;