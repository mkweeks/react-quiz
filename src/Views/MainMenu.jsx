import MenuOption from "../components/MenuOption.jsx";
import data from "../data.json";
import { useTheme } from "../context/ThemeContext.jsx";

function MainMenu() {
  const quizData = data.quizzes;
  const {theme} = useTheme()
  return (
    <>
      <div className="container">
        <div className={`heading ${theme}`}>
          <h1 style={{ fontSize: "2.5rem" }}> <span style={{ fontWeight: "normal" }}>Welcome to the </span><br />Frontend Quiz!</h1>
          <p style={{ fontStyle: "italic" }}>Pick a subject to get started</p>
        </div>

        <div className={`menu ${theme}`}>
          {quizData.map((quiz) => (
            <MenuOption key={quiz.title} title={quiz.title} image={quiz.icon} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MainMenu;
