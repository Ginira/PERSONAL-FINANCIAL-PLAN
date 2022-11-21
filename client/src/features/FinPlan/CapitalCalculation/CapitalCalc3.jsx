import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function CapitalCalc3() {
  const { id } = useParams();
  const paramsFinPlan = useSelector(
    (state) =>
      state.finPlanList.allFinPlan && state.finPlanList.allFinPlan[id - 1]
  );
  const longTarget = useSelector(
    (state) => state.fin_plan.longTarget && state.fin_plan.longTarget[0]
  );
  const shortTarget = useSelector(
    (state) => state.fin_plan.shortTarget && state.fin_plan.shortTarget[0]
  );

  if (!longTarget || !shortTarget || !paramsFinPlan) return null;

  const needMoneyPerMouth = Math.ceil(shortTarget.price_target / 36);

  const capital = Math.ceil(
    ((paramsFinPlan.cash_per_mouth * 12) / 0.06) *
      Math.pow(1.03, paramsFinPlan.goal_age - paramsFinPlan.age)
  );

  const needMoneyPerMouthOsn = Math.ceil(
    ((capital * 1.06) / 10) *
      (0.06 /
        Math.pow(1 + 0.06, paramsFinPlan.goal_age - paramsFinPlan.age - 1))
  );

  const capitallong =
    longTarget.price_target *
    Math.pow(1.03, longTarget.goal_age_target - paramsFinPlan.age);

  const needMoneyPerMouthlong = Math.ceil(
    ((capitallong * 1.06) / 8) *
      (0.06 /
        Math.pow(1 + 0.06, longTarget.goal_age_target - paramsFinPlan.age - 1))
  );

  return (
    <form className="formCalc3">
      <div className="cap_calc3">
        <div>
          <h2 className="block_3">
            Блок 3. Краткосрочные цели (менее 3-х лет)
          </h2>
        </div>
        <table className="table__capcalc3">
          <tr>
            <th>Название цели</th>
            <th>Оценка цели</th>
            <th>Возраст достижения цели</th>
            <th>Осталось месяцев</th>
            <th>Ежемесячное инвестирование</th>
          </tr>
          <tr>
            <td>{shortTarget.title}</td>
            <td>{shortTarget.price_target} ₽</td>
            <td>{23}</td>
            <td>{36}</td>
            <td>{needMoneyPerMouth} ₽</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <div className="total_calc3">
          Итого:{" "}
          {needMoneyPerMouthOsn + needMoneyPerMouth + needMoneyPerMouthlong}
        </div>
        <div className="total_need_delba">
          Итого требуемая дельта:{" "}
          {(needMoneyPerMouthOsn + needMoneyPerMouth + needMoneyPerMouthlong) *
            2}
        </div>
        <div className="total_delba"></div>
      </div>
    </form>
  );
}
