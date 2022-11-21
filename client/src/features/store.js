import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./store/userSlice";
import finPlanSlice from "./store/modalSlice";
import FinPlanListSlice from "./store/FinPlanListSlice";

const store = configureStore(
  // Опции создания хранилища
  {
    // Комбинированный reducer
    reducer: {
      user: userSlice,
      fin_plan: finPlanSlice,
      finPlanList: FinPlanListSlice,
    },
  }
);

export default store;
