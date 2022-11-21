import React from "react";
import { CapitalCalc1 } from "../CapitalCalculation/CapitalCalc1";
import PlanHorizon from "../PlanHorizon/PlanHorizon";
import { CapitalCalc2 } from "../CapitalCalculation/CapitalCalc2";
import { CapitalCalc3 } from "../CapitalCalculation/CapitalCalc3";
import { Today } from "../Today/Today";
import { Resources } from "../Resources/Resources";
import { Tomorrow } from "../Tomorrow/Tomorrow";
import "./FinalyPlan.css";

function FinalyPlan() {
  return (
    <div className="finPlanBox">
      <div className="left__block">
        <PlanHorizon />
        <CapitalCalc1 />
        <CapitalCalc2 />
        <CapitalCalc3 />
      </div>
      <div className="right__block">
        <Today />
        <Resources />
        <Tomorrow />
      </div>
    </div>
  );
}

export default FinalyPlan;
