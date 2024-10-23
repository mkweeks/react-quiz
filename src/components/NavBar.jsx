import { useTheme } from "../context/ThemeContext"
import Icon from "./Icon"
import { useParams } from "react-router-dom"

function NavBar(props) {
    const icon = localStorage.getItem("icon")
    const { id } = useParams()
    const { theme } = useTheme()

    const toggle = () => {
        props.changeTheme()
    }

    return (
        <>
            <div className="nav">
                <div className={`logo ${theme}`}>
                    <Icon image={icon} />
                    <h3>{id}</h3>
                </div>

                <div className="theme">
                    {theme === "dark" ? <img src="/assets/icon-sun-light.svg" /> : <img src="/assets/icon-sun-dark.svg" />}
                    <label className="switch">
                        <input type="checkbox" onClick={toggle} />
                        <span className="slider round"></span>
                    </label>
                    {theme === "light" ? <img src="/assets/icon-moon-dark.svg" /> : <img src="/assets/icon-moon-light.svg" />}
                </div>
            </div>
        </>
    )
}

export default NavBar