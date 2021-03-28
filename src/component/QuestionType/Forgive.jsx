import React from "react";
import { makeStyles } from "@material-ui/core";
import Question from ".././Question";
import BackgroundImage from "../../assets/question_forgive_background.svg";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "400px 400px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "98% 100%",
    background: "rgba(108, 99, 255, 0.25)",
    backgroundAttachment: "fixed",
  },
});

function Forgive({ data, setSteps, steps, setAnswers, answers }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Question
        title={data[1].question}
        placeholder={data[1].placeholder}
        count="3"
        setSteps={setSteps}
        steps={steps}
        setAnswers={setAnswers}
        answers={answers}
      />
    </div>
  );
}

export default Forgive;
