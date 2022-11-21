import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incomeExpense } from "../store/modalSlice";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

export const ModalWinBlock1 = () => {
  const { fin_plan } = useSelector((state) => state.fin_plan);
  // console.log(fin_plan);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [inputText1, setInputText1] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(
      incomeExpense({ inputText, inputText1, fin_plan_id: fin_plan.id })
    );

    navigate("/FinPlanBlock2");
  };

  const navButton2 = () => {
    navigate("/FinPlan");
  };
  const handleInput = (event) => {
    setInputText(event.target.value);
    //console.log(inputText);
  };
  const handleInput1 = (event) => {
    setInputText1(event.target.value);
    //console.log("input1", inputText1);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <h1>{fin_plan?.title}</h1>
        <div className="btn-container">
          <form onSubmit={handleSubmitForm}>
            <h4>Средний месячный доход</h4>
            <input
              type="number"
              name="avg_mouth_income"
              placeholder="Сумма дохода в рублях"
              title="Ввод чисел"
              value={inputText}
              onChange={handleInput}
            />
            <h4>Средний месячный расход</h4>
            <input
              type="number"
              name="avg_mouth_expenses"
              placeholder="Сумма расхода в рублях"
              title="Ввод чисел"
              value={inputText1}
              onChange={handleInput1}
            />
            <button type="submit" className="btn confirm-btn btnFromNav">
              далее
            </button>
            <br />
            <br />
            <button
              onClick={navButton2}
              type="button btnFromNav"
              className="btnFromNav"
            >
              назад
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
