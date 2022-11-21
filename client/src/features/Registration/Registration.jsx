import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registration } from "../store/userSlice";
import "./Registration.css";

function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorMessage } = useSelector((state) => state.user);
  // console.log(user);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const username = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const checkPassword = event.target.check_password.value;
    // console.log("Я тут");
    dispatch(
      registration({
        username,
        email,
        password,
        checkPassword,
      })
    ); // кидаем в санку
    navigate("/");
  };

  // useEffect(() => {
  //   console.log(10);
  //   return () => navigate("/");
  // }, []);

  return (
    <div className="registration_box">
      <div id="registration">
        <h1 id="title_reg">Регистрация</h1>
        <form id="form_reg" onSubmit={handleSubmitForm}>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Введите имя"
            required
            title="Введите свое имя"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Введите email"
            required
            pattern="^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$"
            title="Введите свой email"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Введи пароль"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
          />
          <input
            type="password"
            name="check_password"
            id="check_password"
            placeholder="Введи пароль еще раз"
          />
          <button id="btn_reg" type="submit">
            Зарегистрироваться
          </button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default Registration;
