import React, { useState } from "react";
import Questions from "./Questions";
import Answers from "./Answers";

function HealHue() {
  const [steps, setSteps] = useState(0);
  return (
    <div>
      {steps != 4 && <Questions steps={steps} setSteps={setSteps} />}
      {steps == 4 && <Answers />}
    </div>
  );
}

export default HealHue;
