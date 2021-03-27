import React, { useState, useEffect } from "react";
import FirstImage from "../illustrations/splash_image.svg";
import SecondImage from "../illustrations/splash_image_colorful.svg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2vw",
  },
  image: {
    width: "60%",
    height: "60%",
  },
  firstText: {
    letterSpacing: "3px",
    color: "#2F2E41",
    marginBottom: "0px",
  },
  secondText: {
    letterSpacing: "3px",
    color: "#F47F28",
    marginBottom: "0px",
  },
});

function SplashScreen({ setSplashScreenVisible }) {
  const classes = useStyles();
  const [firstScreenStatus, setFirstScreenStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFirstScreenStatus(false);
    }, 1500);
    setTimeout(() => {
      setSplashScreenVisible(false);
    }, 3000);
  });

  return (
    <div className={classes.root}>
      {firstScreenStatus && (
        <img src={FirstImage} alt="splash image" className={classes.image} />
      )}
      {!firstScreenStatus && (
        <img
          src={SecondImage}
          alt="splash image colorful"
          className={classes.image}
        />
      )}
      <div>
        {firstScreenStatus && (
          <h1 className={classes.firstText}>
            ADD SOME HUE IN YOUR LIFE WITH US
          </h1>
        )}
        {!firstScreenStatus && (
          <h1 className={classes.secondText}>HUEWITH.US</h1>
        )}
      </div>
    </div>
  );
}

export default SplashScreen;
