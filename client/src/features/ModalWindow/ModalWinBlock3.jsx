import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortTarget } from "../store/modalSlice";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

export const ModalWinBlock3 = () => {
  const { fin_plan } = useSelector((state) => state.fin_plan);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [inputText1, setInputText1] = useState("");
  const [inputText2, setInputText2] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(
      shortTarget({
        inputText,
        inputText1,
        inputText2,
        fin_plan_id: fin_plan.id,
      })
    );

    navigate("/FinPlanBlock4");
  };

  const navButton2 = () => {
    navigate("/FinPlanBlock2");
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
          Краткосрочная цель. Здесь нужно добавить цель, которую вы планируете
          осуществить через менее, чем 3 года. Например: Покупка телефона или
          ремонт.
        </h2>
        <div className="btn-container">
          <form onSubmit={handleSubmitForm}>
            <h4>Название цели</h4>
            <input
              type="text"
              name="title"
              placeholder="Название цели"
              value={inputText}
              onChange={handleInput}
            />
            <h4>Стоимость цели</h4>
            <input
              type="number"
              name="price_target"
              placeholder="Стоимость в рублях"
              title="Ввод чисел"
              value={inputText1}
              onChange={handleInput1}
            />
            <h4>Дата достижения цели</h4>
            <input
              type="text"
              name="date_target"
              placeholder="Дата в формате YYYY-MM-DD"
              pattern="(19|20)\d\d-((0[1-9]|1[012])-(0[1-9]|[12]\d)|(0[13-9]|1[012])-30|(0[13578]|1[02])-31)"
              title="Дата в формате YYYY-MM-DD"
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
