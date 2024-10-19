import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Icon from "../components/Icon.jsx"
import { useTheme } from "../context/ThemeContext.jsx";

function FinalScore() {
  const { id } = useParams();
  const score = localStorage.getItem('score')
  const navigate = useNavigate();
  const { theme } = useTheme()
  const icon = localStorage.getItem("icon")

  const newRound = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <>
      <div className="container">
        <div className={`heading ${theme}`}>
          <h1>
            <span style={{fontWeight: "normal"}}>Quiz Completed!</span> <br />
            You scored...
          </h1>
        </div>

        <div className="board">
          <div className={`scoreboard ${theme}`}>
            <div style={{ gap: "1em", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}><Icon image={icon} /> <h1>{id}</h1></div>
            <h1 style={{ fontSize: "3.5em" }}>{score}</h1>
            <p>out of 10</p>
          </div>
          <button className="next" onClick={newRound}>Play Again</button>
        </div>
      </div>
    </>
  );
}

export default FinalScore;
