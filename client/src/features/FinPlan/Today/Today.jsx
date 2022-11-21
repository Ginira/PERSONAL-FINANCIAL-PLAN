import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function Today() {
  const { id } = useParams();
  const paramsFinPlan = useSelector(
    (state) =>
      state.finPlanList.allFinPlan && state.finPlanList.allFinPlan[id - 1]
  );

  const income = useSelector(
    (state) => state.fin_plan.income && state.fin_plan.income[0]
  );

  if (!paramsFinPlan || !income) return null;
  return (
    <form className="formToday">
      <div className="today__1">
        <div>
          <h2>Сегодня</h2>
        </div>
        <table className="today2">
          <tr>
            <td>Средний месячный доход</td>
            <td>{income.avg_mouth_income} ₽</td>
          </tr>
          <tr>
            <td>Средний месячный расход</td>
            <td>{income.avg_mouth_expenses} ₽</td>
          </tr>
          <tr>
            <td>
              <b>Среднемесячная дельта</b>
            </td>
            <td>{income.avg_mouth_income - income.avg_mouth_expenses} ₽</td>
          </tr>

          <tr>
            <td>Вы сохраняете от своего дохода</td>
            <td>
              {Math.ceil(
                ((income.avg_mouth_income - income.avg_mouth_expenses) /
                  income.avg_mouth_income) *
                  100
              )}{" "}
              %
            </td>
          </tr>
          <div className="seyf">
            <div className="seyf__today">
              <span className="span_recomended">
                Рекомендуемая сумма, которую Вы можете откладывать не ухудщая
                качество своей жизни:
              </span>
              <td>
                {((income.avg_mouth_income - income.avg_mouth_expenses) / 100) *
                  40}{" "}
                ₽
              </td>
            </div>
          </div>
        </table>
      </div>
    </form>
  );
}
