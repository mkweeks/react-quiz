import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

function MenuOption(props) {
  const navigate = useNavigate();

  const questionSelect = (event) => {
    const next = event.target.textContent;
    navigate(`/${next}`)
  };

  return (
    <>
      <button className="option" onClick={(e) => questionSelect(e)}>
        <Icon image={props.image} />
        {props.title}
      </button>
    </>
  );
}

export default MenuOption;
