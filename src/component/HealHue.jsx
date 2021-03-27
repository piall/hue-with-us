import React, { useState } from "react";
import Questions from "./Questions";
import Answers from "./Answers";

function HealHue() {
  const [steps, setSteps] = useState(0);
  const [answers, setAnswers] = useState([]);
  return (
    <div>
      {steps !== 4 && (
        <Questions
          steps={steps}
          setSteps={setSteps}
          setAnswers={setAnswers}
          answers={answers}
        />
      )}
      {steps === 4 && <Answers answers={answers} />}
    </div>
  );
}

export default HealHue;
