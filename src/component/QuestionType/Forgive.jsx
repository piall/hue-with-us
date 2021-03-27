import React from "react";
import { makeStyles } from "@material-ui/core";
import Question from ".././Question";
import BackgroundImage from "../../illustrations/question_forgive_background.svg";

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
  },
});

function Forgive({ data, setSteps, steps }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Question
        title={data[1].question}
        placeholder={data[1].placeholder}
        count="3"
        setSteps={setSteps}
        steps={steps}
      />
    </div>
  );
}

export default Forgive;
