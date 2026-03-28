import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
    const theme = useContext(ThemeContext)
    return (


        <div className={"d-flex justify-content-center flex-fill m-1 p-1 rounded footer bg-" + theme.theme.variant}>
            <p>Powered by Ergast :: <a href="https://api.jolpi.ca/ergast/">https://api.jolpi.ca/ergast/</a></p>
        </div>
    );
}

export default Footer;