import data from "../data.json";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuestionOption from "../components/QuestionOption";
import ProgressBar from "../components/ProgressBar";
import { useTheme } from "../context/ThemeContext";


function QuestionPage() {
  const { id } = useParams();
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(0);
  const navigate = useNavigate();
  const [isCorrect, setIsCorrect] = useState(false)
  const [width, setWidth] = useState(0)
  const [selected, setSelected] = useState(false)
  const { theme } = useTheme()

  const updateScore = () => {
    if (question === 9) {
      navigate(`/${id}/score`)
      localStorage.setItem("score", score)
    }
    setSelected(false)
    setWidth(width + 10)
    setQuestion(question + 1);
  };

  const handleAnswerSelect = (answer) => {
    console.log(answer)
    if (answer === correctAnswer) {
      setIsCorrect(true)
      setSelected(true)
      setScore(score + 1);
    }
    else {
      setSelected(true)
      setIsCorrect(false)
    }
  };

  useEffect(() => {
  }, [score]);  // This runs when 'score' changes

  let questionSet = [];

  for (let i = 0; i < 4; i++) {
    if (data.quizzes[i].title === id) {
      questionSet = data.quizzes[i].questions;
    }
  }

  let currentQuestion = questionSet[question].question;
  let options = questionSet[question].options;
  let correctAnswer = questionSet[question].answer;

  return (
    <>
      <div className="container">
        <div className={`heading ${theme}`}>
          <p>Question {question + 1} of 10</p>
          <p>{currentQuestion}</p>
          <ProgressBar width={width} />
        </div>

        <div className="menu">
          {options.map((option, index) => (
            <QuestionOption
              key={option}
              option={option}
              onSelect={(selectedAnswer) => handleAnswerSelect(selectedAnswer)}
              isCorrect={isCorrect}
              number={index}
              disabled={selected}
            />
          ))}
          <button className="next" onClick={updateScore}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default QuestionPage;
