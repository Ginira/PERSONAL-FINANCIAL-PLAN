import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { passiveIncome } from "../store/modalSlice";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

export const ModalWinBlock5 = () => {
  const { fin_plan } = useSelector((state) => state.fin_plan);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [inputText1, setInputText1] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(
      passiveIncome({ inputText, inputText1, fin_plan_id: fin_plan.id })
    );

    navigate("/FinPlanBlock6");
  };

  const navButton2 = () => {
    navigate("/FinPlanBlock4");
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
        <h2>
          Пассивы. Тут нужно указать пассив, который мог бы приносить деньги.
        </h2>
        <h2>Например: Ваша квартира, в которой живут родственники.</h2>
        <div className="btn-container">
          <form onSubmit={handleSubmitForm}>
            <h4>Название пассива</h4>
            <input
              type="text"
              name="title"
              placeholder="Введите название пассива"
              value={inputText}
              onChange={handleInput}
            />
            <h4>Цена пассива</h4>
            <input
              type="number"
              name="price"
              placeholder="Введите стоимость в рублях"
              title="Ввод чисел"
              value={inputText1}
              onChange={handleInput1}
            />
            <button type="submit" className="btn confirm-btn btnFromNav">
              далее
            </button>
            <br />
            <br />
            <button onClick={navButton2} type="button btnFromNav" className="btnFromNav">
              назад
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
