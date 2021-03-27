import { useEffect, useState } from "react";
import SplashScreen from "./component/SplashScreen";

function App() {
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);
  return (
    <>
      {splashScreenVisible && (
        <SplashScreen setSplashScreenVisible={setSplashScreenVisible} />
      )}
    </>
  );
}

export default App;
