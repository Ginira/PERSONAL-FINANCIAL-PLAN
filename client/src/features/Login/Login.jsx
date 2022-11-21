import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/userSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.user);
  async function handleLogin(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(loginUser({ email, password }));
    if (errorMessage) {
      document.querySelector("form").reset();
    }
    navigate("/");
  }

  return (
    <div className="login_box">
      <div id="login">
        <form id="form_login" onSubmit={handleLogin}>
          <h1 className="login_title">Авторизация</h1>
          <input
            id="email_login"
            type="email"
            name="email"
            placeholder="Введите почту"
          />
          <input
            id="password_login"
            type="password"
            name="password"
            placeholder="Введите пароль"
          />
          <button className="btn_login" type="submit">
            Подключиться
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
