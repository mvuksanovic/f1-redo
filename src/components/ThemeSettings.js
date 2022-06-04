import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Form } from "react-bootstrap"

const ThemeSettings = ({changeTheme}) => {
    const { theme } = useContext(ThemeContext)
    const inputs = Object.keys(theme).map(key => {
        let label = ""
        let checked 
            if (key === "variant") {label = "Dark Mode"
                                    checked = theme[key]==="dark"? true : false}
                else if (key === "size") { label = "compact"
                                            checked = theme[key]==="sm"? true : false}
                else {label = key
                    checked = theme[key]}
        
        return(
            <Form.Check
            key={key}
            defaultChecked={checked}
            type="switch"
            id={key}
            label={label}
            onChange={changeTheme}
        />
        )
    })
    return (
        <Form>
           {inputs}
        </Form >)
}

export default ThemeSettings