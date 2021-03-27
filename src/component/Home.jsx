import React, { useState } from "react";
import HomeContent from "./HomeContent";

function Home() {
  const [clickStatus, setClickStatus] = useState(false);
  return (
    <div>{!clickStatus && <HomeContent setClickStatus={setClickStatus} />}</div>
  );
}

export default Home;
