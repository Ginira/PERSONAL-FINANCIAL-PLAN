import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export function CapitalCalc1() {
  const { id } = useParams();
  const paramsFinPlan = useSelector(
    (state) =>
      state.finPlanList.allFinPlan && state.finPlanList.allFinPlan[id - 1]
  );

  if (!paramsFinPlan) return null;
  //console.log("paramsFinPlan-->", paramsFinPlan);

  // Основной

  const capital = Math.ceil(
    ((paramsFinPlan.cash_per_mouth * 12) / 0.06) *
      Math.pow(1.03, paramsFinPlan.goal_age - paramsFinPlan.age)
  );

  const needMoneyPerMouth = Math.ceil(
    ((capital * 1.06) / 10) *
      (0.06 /
        Math.pow(1 + 0.06, paramsFinPlan.goal_age - paramsFinPlan.age - 1))
  );

  // Минимальный

  const cashPerMouthMin = paramsFinPlan.cash_per_mouth / 3;

  const capitalMin = Math.ceil(
    ((cashPerMouthMin * 12) / 0.06) *
      Math.pow(1.03, paramsFinPlan.goal_age + 10 - paramsFinPlan.age)
  );

  const needMoneyPerMouthMin = Math.ceil(
    ((capitalMin * 1.06) / 10) *
      (0.06 /
        Math.pow(1 + 0.06, paramsFinPlan.goal_age + 10 - paramsFinPlan.age - 1))
  );

  // Амбициозный

  const cashPerMouthMax = paramsFinPlan.cash_per_mouth * 2;

  const capitalMax = Math.ceil(
    ((cashPerMouthMax * 12) / 0.06) *
      Math.pow(1.03, paramsFinPlan.goal_age - 5 - paramsFinPlan.age)
  );

  const needMoneyPerMouthMax = Math.ceil(
    ((capitalMax * 1.06) / 10) *
      (0.06 /
        Math.pow(1 + 0.06, paramsFinPlan.goal_age - 5 - paramsFinPlan.age - 1))
  );

  return (
    <form className="formCalc1">
      <div className="cap_calc1">
        <div>
          <h2>Рассчет капитала и ежемесячного инвестирования</h2>
        </div>
        <table>
          <tr>
            <th className="date">
              {" "}
              Дата рассчета: {new Date().toLocaleDateString()}{" "}
            </th>
          </tr>
        </table>
        <div>
          <h2 className="block_2">Блок 1.Пассивный доход</h2>
        </div>
        <table>
          <tr>
            <th className="startCapital">
              Первоначальный капитал: {paramsFinPlan.start_capital}
            </th>
          </tr>
        </table>
        <table className="table__capcalc1">
          <tr>
            <th>План</th>
            <th>Пассивный доход</th>
            <th>Возраст</th>
            <th>Осталось лет</th>
            <th>Требуемый капитал с учетом инфляции</th>
            <th>Ежемесячное инвестирование</th>
          </tr>
          <tr>
            <td>Основной</td>
            <td>{Math.ceil(paramsFinPlan.cash_per_mouth)} ₽</td>
            <td>{Math.ceil(paramsFinPlan.goal_age)}</td>
            <td>{Math.ceil(paramsFinPlan.goal_age - paramsFinPlan.age)}</td>
            <td>{Math.ceil(capital)} ₽</td>
            <td>{Math.ceil(needMoneyPerMouth)} ₽</td>
          </tr>
          <tr>
            <td>Минимальный</td>
            <td>{Math.ceil(cashPerMouthMin)} ₽</td>
            <td>{Math.ceil(paramsFinPlan.goal_age + 10)}</td>
            <td>
              {Math.ceil(paramsFinPlan.goal_age + 10 - paramsFinPlan.age)}
            </td>
            <td>{Math.ceil(capitalMin)} ₽</td>
            <td>{Math.ceil(needMoneyPerMouthMin)} ₽</td>
          </tr>
          <tr>
            <td>Амбициозный</td>
            <td>{Math.ceil(cashPerMouthMax)} ₽</td>
            <td>{Math.ceil(paramsFinPlan.goal_age - 5)}</td>
            <td>{Math.ceil(paramsFinPlan.goal_age - 5 - paramsFinPlan.age)}</td>
            <td>{Math.ceil(capitalMax)} ₽</td>
            <td>{Math.ceil(needMoneyPerMouthMax)} ₽</td>
          </tr>
        </table>
      </div>
    </form>
  );
}
