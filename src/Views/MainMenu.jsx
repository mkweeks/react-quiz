import MenuOption from "../components/MenuOption.jsx";
import data from "../data.json";

function MainMenu() {
  const quizData = data.quizzes;
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="heading">
            <h1>
              Welcome to the <br />
              Frontend Quiz!
            </h1>
            <p>Pick a subject to get started</p>
          </div>

          <div className="menu">
            {quizData.map((quiz) => (
              <MenuOption key={quiz.title} title={quiz.title} image={quiz.icon} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
