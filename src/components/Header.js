import { useContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { ThemeContext } from "../context/ThemeContext";
import { Modal} from "react-bootstrap";
import ThemeSettings from "./ThemeSettings";


const Header = ({ season, currentSeason, updateSeason }) => {

    const location = useLocation()

    const [year, setYear] = useState(season)
    const { theme, setTheme } = useContext(ThemeContext)
    useEffect(() => {
        setYear(season)
    }, [season])

    const btnClick = () => {
        if (year > 1949 && year <= currentSeason) {
            updateSeason(year);
        }
    }

    const onInputChange = (e) => {
        setYear(e.target.value);

    }

    const [show, setShow] = useState(false);//modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeTheme = (e) => {
        const id = e.target.id
        if (id === "variant") {
            theme[id] === "dark" ? setTheme(prevState => { return { ...prevState, [id]: "light" } }) : setTheme(prevState => { return { ...prevState, [id]: "dark" } })
    } else if (id === "size") {
        theme[id] === "sm" ? setTheme(prevState => { return { ...prevState, [id]: "lg" } }) : setTheme(prevState => { return { ...prevState, [id]: "sm" } })
} else {
    const value = !theme[id]
    setTheme(prevState => { return {...prevState, [id]: value}})
}
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
        <>
            <div className={"header d-flex flex-fill m-1 p-1 rounded bg-" + theme.variant}>
                <ButtonToolbar className="flex-grow-1">
                    {button}
                </ButtonToolbar>
                <Button className="m-1 p-1" variant="secondary" onClick={handleShow}>&#9881;</Button>
                <div className="ml-auto" style={hidden}>
                    <input id="selectYear" className="btn-outline" type="number" value={year} min="1950" max={`${currentSeason}`} style={{ width: "4em" }} onChange={onInputChange} />
                    <Button className="m-1 p-1" variant="secondary" onClick={btnClick}>Year</Button>
                </div>
            </div>
            <Modal size="sm" show={show} onHide={handleClose} backdrop={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ThemeSettings changeTheme={changeTheme}/>
                </Modal.Body>
                
            </Modal>
        </>
    );



}

export default Header;