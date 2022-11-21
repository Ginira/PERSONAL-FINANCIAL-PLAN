import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import FinPlanList from "../FinPlanList/FinPlanList";

function Main() {
  return (
    <div className="wewe">
      <div className="main__container">
        <h4>Создать финансовый план</h4>
        <Link to="/FinPlan">
          <button type="button" className="btnCreateFinPlan">
            +
          </button>
        </Link>
      </div>
      <FinPlanList />
    </div>
  );
}

export default Main;
