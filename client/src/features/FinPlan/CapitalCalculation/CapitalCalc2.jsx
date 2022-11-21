import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function CapitalCalc2() {
  const { id } = useParams();
  const paramsFinPlan = useSelector(
    (state) =>
      state.finPlanList.allFinPlan && state.finPlanList.allFinPlan[id - 1]
  );

  const longTarget = useSelector(
    (state) => state.fin_plan.longTarget && state.fin_plan.longTarget[0]
  );
  if (!longTarget || !paramsFinPlan) return null;

  const capital =
    longTarget.price_target *
    Math.pow(1.03, longTarget.goal_age_target - paramsFinPlan.age);

  const needMoneyPerMouth = Math.ceil(
    ((capital * 1.06) / 8) *
      (0.06 /
        Math.pow(1 + 0.06, longTarget.goal_age_target - paramsFinPlan.age - 1))
  );

  console.log(paramsFinPlan);
  console.log(longTarget, "Долгосрочные цели");
  return (
    <form className="formCalc2">
      <div className="cap_calc2">
        <div>
          <h2 className="block_2">
            Блок 2. Долгосрочные материальные цели(более 3-х лет)
          </h2>
        </div>
        <table className="table__capcalc2">
          <tr>
            <th>Название цели </th>
            <th>Стоимость цели</th>
            <th>Возраст достижения цели</th>
            <th>Осталось лет</th>
            <th>Требуемый капитал с учетом инфляции</th>
            <th>Ежемесячное инвестирование</th>
          </tr>
          <tr>
            <td>{longTarget.title}</td>
            <td>{longTarget.price_target} ₽</td>
            <td>{longTarget.goal_age_target}</td>
            <td>{longTarget.goal_age_target - paramsFinPlan.age}</td>
            <td>{Math.ceil(capital)} ₽</td>
            <td>{Math.ceil(needMoneyPerMouth)} ₽</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </form>
  );
}
