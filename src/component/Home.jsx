import React, { useState } from "react";
import HealHue from "./HealHue";
import HomeContent from "./HomeContent";

function Home() {
  const [clickStatus, setClickStatus] = useState(false);
  return (
    <div>
      {!clickStatus && <HomeContent setClickStatus={setClickStatus} />}
      {clickStatus && <HealHue />}
    </div>
  );
}

export default Home;
