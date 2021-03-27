import React, { useState } from "react";
import {
  makeStyles,
  Button,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Luckiest Guy",
    fontSize: "5vh",
  },
  inputBox: {
    fontFamily: "Roboto Mono",
    fontSize: "15px",
    borderRadius: "10px",
    outline: "none",
    background: "#FF6363",
    color: "white",
    maxWidth: "70vw",
    minWidth: "70vw",
    padding: "10px",
    "&::placeholder": {
      fontFamily: "Roboto Mono",
      fontWeight: "300",
      fontSize: "20px",
      textAlign: "center",
      transform: "translateY(4vh)",
    },
    marginBottom: "10px",
  },
  steps: {
    display: "block",
    fontFamily: "Roboto Mono",
    marginBottom: "20px",
    color: "white",
  },
  button: {
    fontFamily: "Roboto Mono",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
function Question({
  title,
  placeholder,
  count,
  setSteps,
  steps,
  setAnswers,
  answers,
}) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const submitAnswers = () => {
    setAnswers([...answers, value]);
    setSteps(steps + 1);
  };
  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h1">
        {title}
      </Typography>
      <TextareaAutosize
        rows={10}
        className={classes.inputBox}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
      />
      <Typography variant="span" className={classes.steps}>
        Steps Left - {count}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        onClick={submitAnswers}
      >
        next
      </Button>
    </div>
  );
}

export default Question;
