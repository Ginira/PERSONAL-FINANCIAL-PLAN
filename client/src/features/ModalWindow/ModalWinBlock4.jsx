import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeIncome } from "../store/modalSlice";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

export const ModalWinBlock4 = () => {
  const { fin_plan } = useSelector((state) => state.fin_plan);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [inputText1, setInputText1] = useState("");
  const [inputText2, setInputText2] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(
      activeIncome({
        inputText,
        inputText1,
        inputText2,
        fin_plan_id: fin_plan.id,
      })
    );

    navigate("/FinPlanBlock5");
  };

  const navButton2 = () => {
    navigate("/FinPlanBlock3");
  };
  const handleInput = (event) => {
    setInputText(event.target.value);
    //console.log(inputText);
  };
  const handleInput1 = (event) => {
    setInputText1(event.target.value);
    //console.log("input1", inputText1);
  };
  const handleInput2 = (event) => {
    setInputText2(event.target.value);
    //console.log("input2", inputText2);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <h1>{fin_plan.title}</h1>
        <h2>
          Активы. Тут нужно указать актив, который приносит вам деньги.
          Например: Квартира сдаваемая в аренду или деньги на депозите.
        </h2>
        <div className="btn-container">
          <form onSubmit={handleSubmitForm}>
            <h4>Название актива</h4>
            <input
              type="text"
              name="title"
              placeholder="Введите название актива"
              value={inputText}
              onChange={handleInput}
            />
            <h4>Цена актива</h4>
            <input
              type="number"
              name="price"
              placeholder="Введите стоимость актива"
              title="Ввод чисел"
              value={inputText1}
              onChange={handleInput1}
            />
            <h4>Доходность актива за год</h4>
            <input
              type="number"
              name="income"
              placeholder="Сумма дохода в год"
              title="Ввод чисел"
              value={inputText2}
              onChange={handleInput2}
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
