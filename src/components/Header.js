import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const Head = ({season, currentSeason, updateSeason}) => {
    
    const location = useLocation()
    console.log(season, location)
    
    const [year, setYear] = useState(season)
    
    useEffect(() => {
        setYear(season)
    }, [currentSeason])


    const btnClick = () => {
        if (year > 1949 && year <= currentSeason) {
            updateSeason(year);
        }
    }

    const onInputChange = (e) => {
        setYear(e.target.value);

    }

    
        var smth = location.pathname;
        smth = (smth === "/") ? " " : smth;
        const array = smth.split('/');

        array[0] = "F1 Feeder";
        var hidden = (array.length > 2) ? { display: 'none' } : {};
        const button = array.map((button, i) => {
            return (
                <Button className="m-1 p-1" variant="secondary" key={i}>{button}</Button>
            );
        }); 
        return (
            <div className="d-flex flex-fill bg-dark m-1 p-1 rounded">
                 <ButtonToolbar className="flex-grow-1">
                    {button}
                </ButtonToolbar>
                <div className="ml-auto" style={hidden}>
                    <input className="btn-outline" type="number" value={year} min="1950" max={`${currentSeason}`} style={{ width: "4em" }} onChange={onInputChange} />
                    <Button className="m-1 p-1" variant="secondary" onClick={btnClick}>Year</Button>
                </div>
            </div>

        );


    
}

export default Head;