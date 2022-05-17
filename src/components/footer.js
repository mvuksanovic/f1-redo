import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
    const theme = useContext(ThemeContext)
    return (


        <div className={"d-flex justify-content-center flex-fill m-1 p-1 rounded footer bg-" + theme.theme}>
            <p>Powered by Ergast :: <a href="https://ergast.com/mrd/">http://ergast.com/mrd/</a></p>
        </div>
    );
}

export default Footer;