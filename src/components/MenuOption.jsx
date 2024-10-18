import { useNavigate } from "react-router-dom";
import Icon from "./Icon";
import { useTheme } from "../context/ThemeContext";

function MenuOption(props) {
  const navigate = useNavigate();
  const {theme} = useTheme()

  const questionSelect = (event) => {
    localStorage.setItem("icon", props.image)
    const next = event.target.textContent;
    navigate(`/${next}`)
  };

  return (
    <>
      <button className={`option ${theme}`} onClick={(e) => questionSelect(e)}>
        <Icon image={props.image} />
        <p style={{fontWeight: "bold"}}>{props.title}</p>
      </button>
    </>
  );
}

export default MenuOption;
