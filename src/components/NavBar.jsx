
import { useEffect, useState } from "react"
import { useTheme } from "../context/ThemeContext"
import Icon from "./Icon"
import { useParams } from "react-router-dom"

function NavBar(props) {
    const icon = localStorage.getItem("icon")
    const [shade, setShade] = useState('')
    const {id} = useParams()
    const { theme } = useTheme()

    useEffect(() => {
        if (theme === "dark") {
            setShade("light")
        }
        else {
            setShade("dark")
        }
    }, [theme])

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
                    <img src={`/assets/icon-sun-${shade}.svg`} />
                    <label className="switch">
                        <input type="checkbox" onClick={toggle} />
                        <span className="slider round"></span>
                    </label>
                    <img src={`/assets/icon-moon-${shade}.svg`} />
                </div>
            </div>
        </>
    )
}

export default NavBar