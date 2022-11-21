import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import FinalyPlan from "../FinPlan/FinalPlan/FinalyPlan";
import Registration from "../Registration/Registration";
import { Navbar } from "../Navbar/Navbar";
import { loadUser } from "../store/userSlice";
import { finPlanAll } from "../store/FinPlanListSlice";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { ModalWinBlock1 } from "../ModalWindow/ModalWinBlock1";
import { ModalWinBlock2 } from "../ModalWindow/ModalWinBlock2";
import { ModalWinBlock3 } from "../ModalWindow/ModalWinBlock3";
import { ModalWinBlock4 } from "../ModalWindow/ModalWinBlock4";
import { ModalWinBlock5 } from "../ModalWindow/ModalWinBlock5";
import { ModalWinBlock6 } from "../ModalWindow/ModalWinBlock6";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
  }, []);
  useEffect(() => {
    if (user) {
      dispatch(finPlanAll());
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {user.user ? (
          <>
            <Route path="/" element={<Main />} />
            <Route path="/FinPlan" element={<ModalWindow />} />
            <Route path="/FinPlanBlock1" element={<ModalWinBlock1 />} />
            <Route path="/FinPlanBlock2" element={<ModalWinBlock2 />} />
            <Route path="/FinPlanBlock3" element={<ModalWinBlock3 />} />
            <Route path="/FinPlanBlock4" element={<ModalWinBlock4 />} />
            <Route path="/FinPlanBlock5" element={<ModalWinBlock5 />} />
            <Route path="/FinPlanBlock6" element={<ModalWinBlock6 />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/allFinPlan/:id" element={<FinalyPlan />} />
          </>
        ) : (
          <>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
