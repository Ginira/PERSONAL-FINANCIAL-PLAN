import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  allFinPlan: null,
};

const finPlanAll = createAsyncThunk("allFinPlan/finPlanList", async () => {
  const response = await fetch("api/allfinplan", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (response && response.status >= 400) {
    const { error } = await response.json();
    throw error;
  } else {
    const data = await response.json();
    console.log(data);
    return data;
  }
});

const removeAsyncFinPlan = createAsyncThunk(
  "allFinPlan/removeAsyncFinPlan",
  async (FinPlanId) => {
    const response = await fetch(`api/${FinPlanId}`, {
      method: "DELETE",
    });
    console.log("response delete", response);
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      //console.log('Fitch-->', data, FinPlanId);
      return { data, FinPlanId };
    }
  }
);

const finPlanListSlice = createSlice({
  name: "allFinPlan",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(finPlanAll.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(finPlanAll.fulfilled, (state, action) => {
        state.allFinPlan = action.payload;
      })
      .addCase(removeAsyncFinPlan.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removeAsyncFinPlan.fulfilled, (state, action) => {
        if (action.payload.data) {
          state.allFinPlan = state.allFinPlan.filter(
            (FinPlanItem) => FinPlanItem.id !== action.payload.FinPlanId
          );
        }
      });
  },
});

export { finPlanAll, removeAsyncFinPlan };
export default finPlanListSlice.reducer;
