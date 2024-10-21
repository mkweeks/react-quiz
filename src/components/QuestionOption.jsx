import React, { useState, useEffect } from "react";
import Icon from "./Icon";
import { useTheme } from "../context/ThemeContext";

function QuestionOption(props) {
  const [buttonClass, setButtonClass] = useState("option");
  const { theme } = useTheme()

  useEffect(() => {
    if (props.selected) {
      { props.isCorrect ? setButtonClass("correct") : setButtonClass("incorrect") }
    }
    else {
      setButtonClass("option")
    }
  }, [props.isCorrect, props.selected])

  const answerSelect = (number) => {
    props.onSelect(number)
  };

  return (
    <>
      <button
        className={`option ${theme} ${buttonClass}`}
        onClick={() => answerSelect(props.number)}
        disabled={props.submitted}
      >
        <Icon icon={props.number} />
        <p style={{ width: "70%" }}>{props.option}</p>
      </button>
    </>
  );
}

export default QuestionOption;
