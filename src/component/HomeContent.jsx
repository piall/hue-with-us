import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import BackgroundImage from "../assets/background.svg";
import BackgroundColorfulImage from "../assets/colorful_background.svg";
import Arrow from "../assets/arrow.gif";
import Logo from "../assets/logo.svg";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#E3E3E3",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "400px 400px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "98% 100%",
    backgroundAttachment: "fixed",
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
    maxWidth: "653px",
    fontFamily: "Open Sans",
    padding: "20px",
    textAlign: "center",
    fontSize: "18px",
  },
  colorfulBackground: {
    background: "#6C63FF",
    backgroundImage: `url(${BackgroundColorfulImage})`,
    backgroundSize: "400px 400px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "98% 100%",
    backgroundAttachment: "fixed",
    color: "white",
  },
  colorfulButton: {
    background: "#F47F28",
    color: "white",
    padding: "10px",
    fontSize: "35px",
    fontFamily: "Open Sans",
    fontWeight: "800",
  },
});

function Home({ setClickStatus, colorful }) {
  const classes = useStyles();
  return (
    <div
      className={`${classes.root} ${
        colorful === "true" ? `${classes.colorfulBackground}` : ""
      }`}
    >
      <section className={classes.section}>
        <div className={classes.buttonContainer}>
          {colorful !== "true" && (
            <>
              <img className={classes.arrow} src={Arrow} alt="arrow" />
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
            </>
          )}
          {colorful === "true" && (
            <Button
              className={classes.colorfulButton}
              variant="contained"
              color="secondary"
              disabled
            >
              Healed Hue ❤️
            </Button>
          )}
        </div>
        <header className={classes.logo}>
          <img src={Logo} alt="logo"></img>
        </header>
        <Typography className={classes.sectionHeader} variant="h1">
          About
        </Typography>
        <p className={classes.sectionContent}>
          Hue refers to the origin of color we can see. Without color in our
          life, our life is dull. We can define our life with colors by
          different shades of color. When we become depressed or sad we start to
          lose the hue in our life. When we are happy we get the original color
          of ourselves and the hue is that thing the original color.
        </p>
      </section>
      <section className={classes.section}>
        <Typography className={classes.sectionHeader} variant="h1">
          Privacy
        </Typography>
        <p className={classes.sectionContent}>
          There will be some questions for you in the <b>HEAL HUE</b>. We don’t
          store anything. We believe in privacy. Write in fully free mind. Happy
          Hueing 😉️.
        </p>
      </section>
    </div>
  );
}

export default Home;
