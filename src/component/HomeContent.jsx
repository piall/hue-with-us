import React, { useState } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import BackgroundImage from "../illustrations/background.svg";
import Arrow from "../illustrations/arrow.gif";
import Logo from "../illustrations/logo.svg";

const useStyles = makeStyles({
  // unhealed: {},
  // healed: {},
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#E3E3E3",
  },
  logo: {
    marginBottom: "10px",
  },
  arrow: {
    width: "80px",
    height: "80px",
    left: "10px",
  },
  buttonContainer: {
    marginBottom: "40px",
  },
  button: {
    background: "#DCDCDC",
    color: "white",
    padding: "10px",
    fontSize: "35px",
    fontFamily: "Open Sans",
    fontWeight: "800",
  },
  sectionContainer: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "400px 400px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "90% 90%",
  },
  section: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionHeader: {
    fontSize: "34px",
    fontFamily: "Luckiest Guy",
    color: "white",
  },
  sectionContent: {
    width: "653px",
    fontFamily: "Open Sans",
  },
});

function Home({ setClickStatus }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.sectionContainer}>
        <section className={classes.section}>
          <div className={classes.buttonContainer}>
            <img className={classes.arrow} src={Arrow} />
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={() => {
                setClickStatus(true);
              }}
            >
              Heal Hue
            </Button>
          </div>
          <header className={classes.logo}>
            <img src={Logo}></img>
          </header>
          <Typography className={classes.sectionHeader} variant="h1">
            About
          </Typography>
          <p className={classes.sectionContent}>
            Hue refers to the origin of color we can see. Without color in our
            life, our life is dull. We can define our life with colors from
            different shades of color. When we become depressed or sad we start
            to lose the hue in our life. When we are happy we get the original
            color of ourselves and the hue is that thing the original color.
          </p>
        </section>
      </div>
      <div className={classes.sectionContainer}>
        <section className={classes.section}>
          <Typography className={classes.sectionHeader} variant="h1">
            Privacy
          </Typography>
          <p className={classes.sectionContent}>
            There will be some questions for you in the <b>HEAL HUE</b>. We
            don’t store anything. We believe in privacy. Write in fully free
            mind. Happy Hueing 😉️.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;
