import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFinPlan } from "../store/modalSlice";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

export const ModalWindow = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [inputText1, setInputText1] = useState("");
  const [inputText2, setInputText2] = useState("");
  const [inputText3, setInputText3] = useState("");
  const [inputText4, setInputText4] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(
      addFinPlan({ inputText, inputText1, inputText2, inputText3, inputText4 })
    );

    navigate("/FinPlanBlock1");
  };
  //console.log(inputText, inputText1, inputText2, inputText3, inputText4);

  const navButton2 = () => {
    navigate("/");
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
  const handleInput3 = (event) => {
    setInputText3(event.target.value);
    //console.log("input1", inputText1);
  };
  const handleInput4 = (event) => {
    setInputText4(event.target.value);
    //console.log("input4--->", inputText4);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <h2>Финансовый План</h2>
        <div className="btn-container">
          <form onSubmit={handleSubmitForm}>
            <h4>Название финансового плана</h4>
            <input
              type="text"
              name="nameFinPlan"
              placeholder="Введите название"
              value={inputText}
              onChange={handleInput}
            />
            <h4>Ваш возрост</h4>
            <input
              type="number"
              name="age"
              placeholder="Ваш текущий возраст"
              title="Ввод чисел"
              value={inputText1}
              onChange={handleInput1}
            />
            <h4>Возраст для достижения финсовой свободы (ранней пенсии)</h4>
            <input
              type="number"
              name="goal_age"
              placeholder="Возраст когда уволишься с работы"
              title="Ввод чисел"
              value={inputText2}
              onChange={handleInput2}
            />
            <h4>Первоначальный капитал</h4>
            <input
              type="number"
              name="start_capital"
              placeholder="Сумма капитала в рублях"
              title="Ввод чисел"
              value={inputText3}
              onChange={handleInput3}
            />
            <h4>Желаемый ежемесячный пассивный доход</h4>
            <input
              type="number"
              name="cash_per_mouth"
              placeholder="Сумма ежемесячных трат в рублях"
              title="Ввод чисел"
              value={inputText4}
              onChange={handleInput4}
            />
            <button type="submit" className="btn confirm-btn btnFromNav">
              далее
            </button>
            <br />
            <br />
            <button onClick={navButton2} type="button" className="btnFromNav">
              отмена
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
