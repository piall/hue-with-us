import React from "react";
import Gratitude from "./QuestionType/Gratitude";
import Forgive from "./QuestionType/Forgive";
import FutureValue from "./QuestionType/FutureValue";
import Acknowledge from "./QuestionType/Acknowledge";
import Question from "./Question";

function Questions({ steps, setSteps, setAnswers, answers }) {
  const data = [
    {
      question: "GRATITUDE",
      placeholder:
        "Write those things for you should be grateful. Didn’t find any? You are still healthy enough to see this also should be a reason.",
    },
    {
      question: "FORGIVE",
      placeholder:
        "Write any alternative (positive) way to explain the situation. Didn't find anyone? Forgive yourself first.",
    },
    {
      question: "FUTURE VALUE",
      placeholder:
        "Will you remember or feel the same about current situation next day or week or month or year?",
    },
    {
      question: "ACKNOWLEDGE",
      placeholder:
        "Write some achievements you made in your life. Didn’t find any? You have born also is an achievement,",
    },
  ];
  return (
    <div>
      {steps === 0 && (
        <Gratitude
          data={data}
          setSteps={setSteps}
          steps={steps}
          setAnswers={setAnswers}
          answers={answers}
        />
      )}
      {steps === 1 && (
        <Forgive
          data={data}
          setSteps={setSteps}
          steps={steps}
          setAnswers={setAnswers}
          answers={answers}
        />
      )}
      {steps === 2 && (
        <FutureValue
          data={data}
          setSteps={setSteps}
          steps={steps}
          setAnswers={setAnswers}
          answers={answers}
        />
      )}
      {steps === 3 && (
        <Acknowledge
          data={data}
          setSteps={setSteps}
          steps={steps}
          setAnswers={setAnswers}
          answers={answers}
        />
      )}
      
    </div>
  );
}

export default Questions;
