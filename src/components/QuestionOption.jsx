import React, { useState, useEffect } from "react";
import Icon from "./Icon";
import { useTheme } from "../context/ThemeContext";

function QuestionOption(props) {
  const [selected, setSelected] = useState(false);
  const [buttonClass, setButtonClass] = useState("option");
  const {theme} = useTheme()

  useEffect(() => {
    if (selected) {
      if (props.isCorrect) {
        setButtonClass("correct");
      } else if (props.isCorrect === false) {
        setButtonClass("incorrect");
      }
    }
  }, [selected, props.isCorrect]);

  const answerSelect = (event) => {
    setSelected(true);
    let selectedAnswer = (event.target.textContent).substring(1)
    props.onSelect(selectedAnswer); //refer to this line
  };

  return (
    <>
      <button
        className={`option ${theme} ${buttonClass} `}
        disabled={props.disabled}
        onClick={(e) => answerSelect(e)}
      >
        <Icon icon={props.number} />
        {props.option}
      </button>
    </>
  );
}

export default QuestionOption;
