import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import BackgroundImage from "../illustrations/colorful_background.svg";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "auto",
    minHeight: "100vh",
    background: "#6C63FF",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "400px 400px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "95% 95%",
    backgroundAttachment: "fixed",
    color: "white",
  },
  bigHeader: {
    fontFamily: "Luckiest Guy",
    fontSize: "44px",
    textAlign: "center",
    marginTop: "50px",
  },
  smallHeader: {
    fontFamily: "Luckiest Guy",
    textAlign: "center",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  answerContainer: {
    height: "100%",
    padding: "45px",
  },
  answer: {
    fontFamily: "Roboto Mono",
    fontSize: "18px",
    fontWeight: "300",
    marginBottom: "15px",
    wordWrap: "break-word",
  },
  answerType: {
    fontFamily: "Roboto Mono",
    display: "block",
    fontSize: "16px",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#F47F28",
  },
  answerTitle: {
    fontFamily: "Roboto Mono",
    fontWeight: "600",
    fontSize: "22px",
    marginBottom: "10px",
  },
});

function Answers({ answers }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <Typography className={classes.bigHeader} variant="h2">
          DID YOU NOTICE?
          <br /> YOU HAVE GOT BACK YOUR <br />
          HUE!
        </Typography>
        <Typography className={classes.smallHeader} variant="h5">
          Also Hue Makes Anything More Beautiful & Clear! like happiness
        </Typography>
      </div>
      <div className={classes.answerContainer}>
        <Typography variant="h5" className={classes.answerTitle}>
          Here is your answers:{" "}
        </Typography>
        {answers.map((answer, index) => {
          return (
            <div>
              {index === 0 && (
                <Typography variant="h5" className={classes.answerType}>
                  Gratitude:
                </Typography>
              )}
              {index === 1 && (
                <Typography variant="h5" className={classes.answerType}>
                  Forgive:
                </Typography>
              )}
              {index === 2 && (
                <Typography variant="h5" className={classes.answerType}>
                  Future Value:
                </Typography>
              )}
              {index === 3 && (
                <Typography variant="h5" className={classes.answerType}>
                  Acknowledge:
                </Typography>
              )}
              <Typography className={classes.answer}>{answer}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Answers;
