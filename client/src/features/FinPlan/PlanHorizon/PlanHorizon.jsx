import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function PlanHorizon() {
  const { id } = useParams();
  const paramsFinPlan = useSelector(
    (state) =>
      state.finPlanList.allFinPlan && state.finPlanList.allFinPlan[id - 1]
  );

  if (!paramsFinPlan) return null;

  return (
    <div className="horizon">
      <form className="form_fin_plan">
        <h1>Горизонт планирования.</h1>
        <label>
          <tr>
            <th>Текущий возраст: {`${paramsFinPlan.age} лет`}</th>
            <th>
              Возраст перехода на пассивный доход:{" "}
              {`${paramsFinPlan.goal_age} лет`}
            </th>
          </tr>
        </label>
      </form>
    </div>
  );
}

export default PlanHorizon;
