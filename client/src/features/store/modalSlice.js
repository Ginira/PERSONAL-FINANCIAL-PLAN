import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  fin_plan: null,
  income: null,
  longTarget: null,
  shortTarget: null,
  activeIncome: null,
  passiveIncome: null,
  debtUser: null,
  error: null,
};

// ModalWindow
const addFinPlan = createAsyncThunk("fin_plan/addFinPlan", async (payload) => {
  const response = await fetch("api/modal", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (response.status >= 400) {
    const { error } = await response.json();
    throw error;
  } else {
    const data = await response.json();
    return data;
  }
});

//ModalWinBlock1
const incomeExpense = createAsyncThunk(
  "fin_plan/incomeExpense",
  async (payload) => {
    const response = await fetch("api/incomeExpense", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

//ModalWinBlock2
const longTarget = createAsyncThunk("fin_plan/longTarget", async (payload) => {
  const response = await fetch("api/longTarget", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (response.status >= 400) {
    const { error } = await response.json();
    throw error;
  } else {
    const data = await response.json();
    return data;
  }
});

//ModalWinBlock3
const shortTarget = createAsyncThunk(
  "fin_plan/shortTarget",
  async (payload) => {
    const response = await fetch("api/shortTarget", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

//ModalWinBlock4
const activeIncome = createAsyncThunk(
  "fin_plan/activeIncome",
  async (payload) => {
    const response = await fetch("api/activeIncome", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

//ModalWinBlock5
const passiveIncome = createAsyncThunk(
  "fin_plan/passiveIncome",
  async (payload) => {
    const response = await fetch("api/passiveIncome", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

//ModalWinBlock6
const debtUser = createAsyncThunk("fin_plan/debtUser", async (payload) => {
  const response = await fetch("api/debtUser", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (response.status >= 400) {
    const { error } = await response.json();
    throw error;
  } else {
    const data = await response.json();
    return data;
  }
});

const longTargetforFP = createAsyncThunk(
  "longtarget/longTargetforFP",
  async (id) => {
    const response = await fetch(`api/alllongtarget/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

const shortTargetforFP = createAsyncThunk(
  "shortarget/shortTargetforFP",
  async (id) => {
    const response = await fetch(`api/allshorttarget/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

const incomeforFP = createAsyncThunk("income/incomeforFP", async (id) => {
  const response = await fetch(`api/allincome/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (response.status >= 400) {
    const { error } = await response.json();
    throw error;
  } else {
    const data = await response.json();
    return data;
  }
});

const activeforFP = createAsyncThunk("active/activeforFP", async (id) => {
  const response = await fetch(`api/allactive/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (response.status >= 400) {
    const { error } = await response.json();
    throw error;
  } else {
    const data = await response.json();
    return data;
  }
});

const passiveforFP = createAsyncThunk("passive/passiveforFP", async (id) => {
  const response = await fetch(`api/allpassive/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (response.status >= 400) {
    const { error } = await response.json();
    throw error;
  } else {
    const data = await response.json();
    return data;
  }
});

const debtforFP = createAsyncThunk("debt/debtforFP", async (id) => {
  const response = await fetch(`api/alldebt/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (response.status >= 400) {
    const { error } = await response.json();
    throw error;
  } else {
    const data = await response.json();
    return data;
  }
});

const finPlanSlice = createSlice({
  name: "fin_plan",
  initialState,
  reducers: {
    falseMessage: (state, action) => {
      state.checkFin_plan = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addFinPlan.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(addFinPlan.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const newFinPlan = action.payload;
        state.fin_plan = newFinPlan;
        const message = action.payload.errorMessage;
        state.errorMessage = message;
      })
      .addCase(incomeExpense.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(longTarget.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(shortTarget.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(activeIncome.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(passiveIncome.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(debtUser.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(debtUser.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        state = initialState;
      })
      .addCase(longTargetforFP.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(longTargetforFP.fulfilled, (state, action) => {
        state.longTarget = action.payload;
      })
      .addCase(shortTargetforFP.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(shortTargetforFP.fulfilled, (state, action) => {
        state.shortTarget = action.payload;
      })
      .addCase(incomeforFP.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(incomeforFP.fulfilled, (state, action) => {
        state.income = action.payload;
      })
      .addCase(activeforFP.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(activeforFP.fulfilled, (state, action) => {
        state.activeIncome = action.payload;
      })
      .addCase(passiveforFP.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(passiveforFP.fulfilled, (state, action) => {
        state.passiveIncome = action.payload;
      })
      .addCase(debtforFP.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(debtforFP.fulfilled, (state, action) => {
        state.debtUser = action.payload;
      });
  },
});

export {
  addFinPlan,
  incomeExpense,
  longTarget,
  shortTarget,
  activeIncome,
  passiveIncome,
  debtUser,
  longTargetforFP,
  shortTargetforFP,
  incomeforFP,
  activeforFP,
  passiveforFP,
  debtforFP,
};

export const { falseMessage } = finPlanSlice.actions;

// export const {  } = modalSlice.actions;
export default finPlanSlice.reducer;
