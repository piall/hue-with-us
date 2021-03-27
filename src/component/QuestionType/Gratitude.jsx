import React from "react";
import { makeStyles } from "@material-ui/core";
import Question from ".././Question";
import BackgroundImage from "../../illustrations/background.svg";

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
    background: "rgba(108, 99, 255, 0.1)",
  },
});

function Gratitude({ data, setSteps, steps }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Question
        title={data[0].question}
        placeholder={data[0].placeholder}
        count="4"
        setSteps={setSteps}
        steps={steps}
      />
    </div>
  );
}

export default Gratitude;