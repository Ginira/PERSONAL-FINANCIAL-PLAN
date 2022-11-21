import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, falseMessage } from "../store/userSlice";

function ChangePassword() {
  const dispatch = useDispatch();
  const { checkPassword } = useSelector((state) => state.user);
  const handleChangePassword = (event) => {
    event.preventDefault();
    const oldPassword = event.target.oldPassword.value;
    const newPassword = event.target.newPassword.value;
    const checkNewPassword = event.target.checkNewPassword.value;
    // console.log("я тут");
    // console.log(oldPassword, newPassword, checkNewPassword);
    dispatch(
      changePassword({
        oldPassword,
        newPassword,
        checkNewPassword,
      })
    );
  };
  if (checkPassword) {
    document.querySelector("changePasswordForm").reset();
    setTimeout(() => {
      dispatch(falseMessage(false));
    }, 5000);
  }

  return (
    <div>
      <form id="changePasswordForm" onSubmit={handleChangePassword}>
        <input
          type="password"
          className="oldPassword"
          name="oldPassword"
          placeholder="Введите старый пароль"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
        />
        <input
          type="password"
          className="newPassword"
          name="newPassword"
          placeholder="Введите новый пароль"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
        />
        <input
          type="password"
          className="checkNewPassword"
          name="checkNewPassword"
          placeholder="Повторите новый пароль"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Пароль должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
        />
        <button
          className="button btn_change_password"
          id="btnChangePassword"
          type="submit"
          name="button"
        >
          Изменить пароль
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;
