import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function Resources() {
  const { id } = useParams();
  const paramsFinPlan = useSelector(
    (state) =>
      state.finPlanList.allFinPlan && state.finPlanList.allFinPlan[id - 1]
  );
  const active = useSelector(
    (state) => state.fin_plan.activeIncome && state.fin_plan.activeIncome[0]
  );
  const passive = useSelector(
    (state) => state.fin_plan.passiveIncome && state.fin_plan.passiveIncome[0]
  );
  const debt = useSelector(
    (state) => state.fin_plan.debtUser && state.fin_plan.debtUser[0]
  );

  if (!paramsFinPlan || !active || !passive || !debt) return null;
  console.log(paramsFinPlan);
  console.log(debt, "Долги");
  console.log(active, "Активы");
  console.log(passive, "Пассивы");
  return (
    <form className="resourcesForm">
      <div>
        <div>
          <h1>Ресурсы</h1>
        </div>
        <table className="tableResources">
          <tr>
            <td>Активы</td>
            <td>Стоимость</td>
            <td>Доходность в год</td>
            <td>Доходность в процентах</td>
          </tr>
          <tr>
            <td>{active.title}</td>
            <td>{active.price} ₽</td>
            <td>{active.income} ₽</td>
            <td>{(active.income / active.price) * 100} %</td>
          </tr>
        </table>

        <table className="tableResources">
          <tr>
            <td>Пассивы</td>
            <td>Стоимость</td>
          </tr>
          <tr>
            <td>{passive.title}</td>
            <td>{passive.price} ₽</td>
          </tr>
        </table>

        <table className="tableResources">
          <tr>
            <td>Долги</td>
            <td>Сумма долга</td>
          </tr>
          <tr>
            <td>{debt.title}</td>
            <td>{debt.sum_debt} ₽</td>
          </tr>
        </table>
      </div>
    </form>
  );
}
