import { useState } from "react";
import SplashScreen from "./component/SplashScreen";
import Home from "./component/Home";
import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles({
  footer: {
    width: "100vw",
    fontFamily: "Roboto Mono",
    textAlign: "center",
    padding: "5px",
    background: "orange",
  },
  link: {
    "&:link": {
      color: "white",
    },
  },
});

function App() {
  const classes = useStyles();
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);
  return (
    <>
      {splashScreenVisible && (
        <SplashScreen setSplashScreenVisible={setSplashScreenVisible} />
      )}
      {!splashScreenVisible && (
        <>
          <Home />
          <footer>
            <Typography className={classes.footer}>
              Made With 💜️ in the{" "}
              <a href="https://mlh.io/" className={classes.link}>
                MLH Hackathon
              </a>{" "}
              by{" "}
              <a href="https://github.com/mdPial" className={classes.link}>
                Pial
              </a>
            </Typography>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
