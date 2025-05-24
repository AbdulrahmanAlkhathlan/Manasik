import React, { useState } from "react";
import "./css/UmrahGuide.css";
import UmrahIntroSection from "./UmrahIntroSection";
import UmrahStepItem from "./UmrahStepItem";
import StepNavigation from "./StepNavigation";
import { umrahStepsData } from "./data/umrahStepsData";

const UmrahGuide = () => {
  const [activeStep, setActiveStep] = useState("ihram");

  return (
    <div className="umrah-guide">
      <UmrahIntroSection />
      <div className="umrah-steps-container">
        <h2>Umrah Steps</h2>
        <StepNavigation activeStep={activeStep} onChange={setActiveStep} />
        <div className="step-content">
          <UmrahStepItem 
            data={umrahStepsData[activeStep]} 
            isFinal={activeStep === "shaving"} 
          />
        </div>
      </div>
    </div>
  );
};

export default UmrahGuide;
