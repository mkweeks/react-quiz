import React, { useState, useEffect } from "react";
import Icon from "./Icon";

function QuestionOption(props) {
  const [selected, setSelected] = useState(false);
  let buttonClass = "option";

  if (selected) {
    if (props.isCorrect) {
      buttonClass = "correct";
    } else if (props.isCorrect === false) {
      buttonClass = "incorrect";
    }
  }

  const answerSelect = (event) => {
    setSelected(true);
    let selectedAnswer = (event.target.textContent).substring(1)
    props.onSelect(selectedAnswer); //refer to this line
  };

  return (
    <>
      <button
        className={buttonClass}
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
