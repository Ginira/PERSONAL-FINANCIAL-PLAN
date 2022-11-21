import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debtUser } from "../store/modalSlice";
import "./Modal.css";
import { useNavigate } from "react-router-dom";
import { finPlanAll } from "../store/FinPlanListSlice";

  export const ModalWinBlock6 = () => {
  const { fin_plan } = useSelector((state) => state.fin_plan);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [inputText1, setInputText1] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(debtUser({ inputText, inputText1, fin_plan_id: fin_plan.id }));
    dispatch(finPlanAll());
    navigate("/");
  };

  const navButton2 = () => {
    navigate("/FinPlanBlock5");
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
        <h1>{fin_plan.title}</h1>
        <h2>Долги</h2>
        <div className="btn-container">
          <form onSubmit={handleSubmitForm}>
            <h4>Название пассива</h4>
            <input
              type="text"
              name="title"
              placeholder="Название"
              value={inputText}
              onChange={handleInput}
            />
            <h4>Сумма долга</h4>
            <input
              type="number"
              name="sum_debt"
              placeholder="Сумма"
              title="Ввод чисел"
              value={inputText1}
              onChange={handleInput1}
            />
            <button type="submit" className="btn confirm-btn btnFromNav">
              готово
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
