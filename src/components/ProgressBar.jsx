import { useTheme } from "../context/ThemeContext"

function ProgressBar (props) {

    const progressStyle = {
        width: `${props.width}%`
    }

    const {theme} = useTheme()
    return (
        <>
            <div className={`wrapper ${theme}`}>
                <div className="progress" style={progressStyle}></div>
            </div>
        </>
    )
}

export default ProgressBar