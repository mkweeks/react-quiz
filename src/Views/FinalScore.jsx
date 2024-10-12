import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function FinalScore() {
  const { id } = useParams();
  const score = localStorage.getItem('score')
  const navigate = useNavigate();

  const newRound = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="heading">
            <h1>
              Quiz Completed! <br />
              You scored...
            </h1>
          </div>

          <div className="board">
            <div className="scoreboard">
              <h1>{id}</h1>

              <h1 style={{ fontSize: "3.5em" }}>{score}</h1>

              <p>out of 10</p>
            </div>
            <button className="next" onClick={newRound}>Play Again</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FinalScore;
