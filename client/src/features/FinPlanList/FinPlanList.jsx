import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./FinPlanList.css";
import { removeAsyncFinPlan } from "../store/FinPlanListSlice";
import {
  activeforFP,
  debtforFP,
  incomeforFP,
  longTargetforFP,
  passiveforFP,
  shortTargetforFP,
} from "../store/modalSlice";
import { finPlanAll } from "../store/FinPlanListSlice";

const FinPlanList = () => {
  const allPlan = useSelector((state) => state.finPlanList.allFinPlan);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerNavigate = (id) => {
    dispatch(finPlanAll());
    dispatch(longTargetforFP(id));
    dispatch(shortTargetforFP(id));
    dispatch(incomeforFP(id));
    dispatch(activeforFP(id));
    dispatch(passiveforFP(id));
    dispatch(debtforFP(id));
    navigate(`/allFinPlan/${id}`);
  };

  return (
    <div className="mainContainer">
      {allPlan
        ? allPlan.map((el) => (
            <div key={el.id} el={el} className="container">
              <h4>Название финансового плана:</h4>
              <div className="el_title">{el.title}</div>
              <button
                type="button"
                onClick={() => handlerNavigate(el.id)}
                className="btnLoginbtnFinPlan"
              >
                Подробнее
              </button>
              <div className="addMargin">
                <button
                  type="button"
                  onClick={() => dispatch(removeAsyncFinPlan(el.id))}
                  className="btnFinPlanItem"
                >
                  Удалить
                </button>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default FinPlanList;
