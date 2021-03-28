import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import BackgroundImage from "../assets/colorful_background.svg";
import Arrow from ".././assets/arrow.gif";
import Logo from ".././assets/logo.svg";
import HomeContent from "../component/HomeContent";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "auto",
    minHeight: "100vh",
    background: "#6C63FF",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "400px 400px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "98% 100%",
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
    padding: "20px"
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  answerContainer: {
    height: "100%",
    padding: "30px 45px",
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
  logo: {
    marginBottom: "10px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  arrow: {
    width: "80px",
    height: "80px",
    left: "10px",
  },
  bottomContainer: {
    padding: "10px 45px",
  },
  bottomContainerText: {
    fontFamily: "Open Sans",
  },
});

function Answers({ answers }) {
  const classes = useStyles();
  const [clickStatus, setClickStatus] = useState(false);
  return (
    <div className={classes.root}>
      {!clickStatus && (
        <>
          <div className={classes.headerContainer}>
            <Typography className={classes.bigHeader} variant="h2">
              DID YOU NOTICE?
              <br /> YOU HAVE GOT BACK YOUR <br />
              HUE!
            </Typography>
            <Typography className={classes.smallHeader} variant="h5">
              Also Hue Makes Anything More Beautiful & Clear! like happiness
            </Typography>
            <div className={classes.bottomContainer}>
              <Typography variant="h6" className={classes.bottomContainerText}>
                You helped us to get the hue of our page. Go to home page.
              </Typography>
              <img className={classes.arrow} src={Arrow} alt="arrow" />
              <img
                className={classes.logo}
                src={Logo}
                alt="logo"
                onClick={() => {
                  setClickStatus(true);
                }}
              ></img>
            </div>
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
        </>
      )}
      {clickStatus && <HomeContent colorful="true" />}
    </div>
  );
}

export default Answers;
