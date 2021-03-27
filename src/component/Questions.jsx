import React from "react";
import Question from "./Question";

function Questions({steps, setSteps}) {
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
      {steps == 0 && (
        <Question
          title={data[0].question}
          placeholder={data[0].placeholder}
          count="4"
          setSteps={setSteps}
          steps={steps}
        />
      )}
      {steps == 1 && (
        <Question
          title={data[1].question}
          placeholder={data[1].placeholder}
          count="3"
          setSteps={setSteps}
          steps={steps}
        />
      )}
      {steps == 2 && (
        <Question
          title={data[2].question}
          placeholder={data[2].placeholder}
          count="2"
          setSteps={setSteps}
          steps={steps}
        />
      )}
      {steps == 3 && (
        <Question
          title={data[3].question}
          placeholder={data[3].placeholder}
          count="1"
          setSteps={setSteps}
          steps={steps}
        />
      )}
    </div>
  );
}

export default Questions;
