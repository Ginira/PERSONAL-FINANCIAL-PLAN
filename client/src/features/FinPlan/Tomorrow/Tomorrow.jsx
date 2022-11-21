import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function Tomorrow() {
  const { id } = useParams();

  const paramsFinPlan = useSelector(
    (state) =>
      // console.log("state--->", state.finPlanList.allFinPlan)
      //console.log("STATE-->", state.finPlanList.allFinPlan)
      state.finPlanList.allFinPlan
    //&& state.finPlanList.allFinPlan[id - 1]
  );

  const capital = Math.ceil(
    ((paramsFinPlan.cash_per_mouth * 12) / 0.06) *
      Math.pow(1.03, paramsFinPlan.goal_age - paramsFinPlan.age)
  );

  const needMoneyPerMouth = Math.ceil(
    ((capital * 1.06) / 10) *
      (0.06 /
        Math.pow(1 + 0.06, paramsFinPlan.goal_age - paramsFinPlan.age - 1))
  );

  if (!paramsFinPlan) return null;

  return (
    <form className="formTomorrow">
      <div className="tomorrow_1">
        <div>
          <h2>Завтра</h2>
        </div>
        <table className="table__tomorrow">
          <tr>
            <th>План пассивного дохода</th>
            <th>Основной: </th>
          </tr>

          <tr>
            <td>Целевой капитал</td>
            <td>{capital} ₽</td>
          </tr>

          <tr>
            <td>Пассивный доход</td>
            <td>{paramsFinPlan.cash_per_mouth} ₽</td>
          </tr>

          <tr>
            <td>Осталось лет</td>
            <td>{paramsFinPlan.goal_age - paramsFinPlan.age}</td>
          </tr>

          <tr>
            <td>Средняя доходность с учётом инфляции</td>
            <td>{6} %</td>
          </tr>

          <tr>
            <td>Стартовая инвестиция</td>
            <td>{paramsFinPlan.start_capital} ₽</td>
          </tr>

          <tr>
            <td>
              <b>Ежемесячное инвестирование</b>
            </td>
            <td>{needMoneyPerMouth} ₽</td>
          </tr>
          <tr>
            <td>
              <b>% выполнения фин. плана</b>
            </td>
            <td>
              {Math.ceil((paramsFinPlan.start_capital / capital) * 100)} %
            </td>
          </tr>
        </table>
      </div>
    </form>
  );
}
