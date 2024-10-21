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
  const [answer, setAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState(false)
  const [width, setWidth] = useState(0)
  const [selectedButton, setSelectedButton] = useState()
  const [submitted, setSubmitted] = useState(false)
  const { theme } = useTheme()

  const updateScore = () => {
    if (submitted === true) {
      setSubmitted(false)
      setQuestion(question + 1);
      setWidth(width + 10)
      setIsCorrect(false)
      if (question === 9) {
        navigate(`/${id}/score`)
        localStorage.setItem("score", score)
      }
    }
    else {
      setSubmitted(true)
      if (correctAnswer === answer) {
        setScore(score + 1)
        setIsCorrect(true)
        console.log("correct")
      }
    }
  };

  const handleAnswerSelect = (index) => {
    setAnswer(options[index])
    setSelectedButton(index)
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
          <p style={{ fontStyle: "italic" }}>Question {question + 1} of 10</p>
          <h2>{currentQuestion}</h2>
          <ProgressBar width={width} />
        </div>

        <div className="menu">
          {options.map((option, index) => (
            <QuestionOption
              key={index}
              option={option}
              onSelect={() => handleAnswerSelect(index)}
              isCorrect={isCorrect}
              submitted={submitted}
              number={index}
              selected={(selectedButton === index) && submitted} 
            />
          ))}
          <button className="next" onClick={updateScore}>
            {submitted === false ? "Submit Answer" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
}

export default QuestionPage;
