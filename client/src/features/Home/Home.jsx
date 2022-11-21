import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div id="homeContainer">
      <div className="divHome">
        <h1 id="h1Home">Personal Financial Plan</h1>
        <h2 id="h2home_text">
          Финансовый план - это инструмент с помощью которого вы можете
          просчитать свои финансовые цели, желания или мечты исходя из ваших
          доходов и расходов. А так же понять как оптимизировать ваши текущие
          средства для достижения своих целей.
        </h2>

        <button
          className="btnHome"
          type="button"
          onClick={() => navigate("/registration")}
        >
          Регистрация
        </button>
        <button
          className="btnHome2"
          type="button"
          onClick={() => navigate("/login")}
        >
          Логин
        </button>
      </div>
    </div>
  );
}

export default Home;
