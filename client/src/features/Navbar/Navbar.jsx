import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteSession } from "../store/userSlice";
import "./Navbar.css";

export const Navbar = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDestroySession = () => {
    dispatch(deleteSession());
    navigate("/");
  };
  return (
    <div className="nav__wrapper">
      <div className="nav__inner">
        <div>
          <Link to="/" className="logo">
            PFP
          </Link>
        </div>
        <div>
          {user.user ? (
            <div className="divNav">
              <Link to="/" className="nav__link">
                Главная
              </Link>
              <Link to="/profile" className="nav__link">
                Профиль
              </Link>
              <button
                className="btnNav"
                type="button"
                onClick={handleDestroySession}
              >
                Выйти
              </button>
            </div>
          ) : (
            <div className="divNav">
              <div className="btn2">
                <button
                  className="btnMain btnReg btnNav"
                  id="btnMain2"
                  type="button"
                  onClick={() => navigate("/registration")}
                >
                  Зарегистрироваться
                </button>
              </div>
              <div className="btn2">
                <button
                  className="btnMain btnNav"
                  id="btnMain2"
                  type="button"
                  onClick={() => navigate("/login")}
                >
                  Войти
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
