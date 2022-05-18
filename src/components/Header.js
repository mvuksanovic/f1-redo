import { useContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { ThemeContext } from "../context/ThemeContext";
import { Modal } from "react-bootstrap";
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

    const changeTheme = () => {
        theme.variant === "dark" ? setTheme(prevState => { return { ...prevState, variant: "light" } }) : setTheme(prevState => { return { ...prevState, variant: "dark" } })
    }
    const lightButtonValue = theme.variant === "dark" ? "light" : "dark"

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
                <Button className="m-1 p-1" variant="link" onClick={handleShow}>Settings</Button>
                <div className="ml-auto" style={hidden}>
                    <input className="btn-outline" type="number" value={year} min="1950" max={`${currentSeason}`} style={{ width: "4em" }} onChange={onInputChange} />
                    <Button className="m-1 p-1" variant="secondary" onClick={btnClick}>Year</Button>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={changeTheme}>
                        {lightButtonValue}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );



}

export default Header;