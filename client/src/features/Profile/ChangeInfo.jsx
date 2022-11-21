import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUserInfo } from "../store/userSlice";

function ChangeInfo() {
  const user = useSelector((state) => state.user.user);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const username = event.target.name.value;
    const email = event.target.email.value;

    dispatch(
      editUserInfo({
        username,
        email,
      })
    );
    navigate("/profile");
  };

  return (
    <div>
      <form id="changeform" onSubmit={handleSubmitForm}>
        <input
          type="name"
          name="name"
          className="change_name"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          title="Введите новое имя"
          placeholder="Изменить имя"
        />
        <input
          type="email"
          name="email"
          className="change_email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          pattern="^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$"
          title="Введите новую почту"
          placeholder="Изменить почту"
        />
        <button
          className="button btn_change_info"
          id="btnChangeInfo"
          type="submit"
        >
          Сохранить изменения
        </button>
      </form>
    </div>
  );
}

export default ChangeInfo;
