import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  users: null,
  errorMessage: null,
  checkPassword: false,
};

const registration = createAsyncThunk(
  "user/registration", // это тайп для редьюсера

  async (payload) => {
    // сюда прилетает пэйлоад из компонента
    const response = await fetch("/api/registration", {
      // сюда кидаем фетч
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();

    if (data.error) {
      throw data.errorMessage;
    }

    return data;
  }
);

const loginUser = createAsyncThunk(
  "user/login", // это тайп для редьюсера
  async (payload) => {
    // сюда прилетает пэйлоад из компонента
    const response = await fetch("/api/login", {
      // сюда кидаем фетч
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (data.error) {
      throw data.errorMessage;
    }

    return data;
  }
);

const loadUser = createAsyncThunk("user/usersession", async () => {
  const response = await fetch("/api/session");
  const data = await response.json();
  if (data.error) {
    throw data.error;
  }
  return data;
});

const deleteSession = createAsyncThunk("user/deletesession", async () => {
  const response = await fetch("/api/logout", {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  });
  const data = await response.json();
  if (data.error) {
    throw data.error;
  }
  return data;
});

const editUserInfo = createAsyncThunk("user/editUserInfo", async (payload) => {
  const response = await fetch("/api/profile", {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();

  if (data.error) {
    throw data.error;
  }
  return data;
});

const changePassword = createAsyncThunk(
  "user/changePassword", // это тайп для редьюсера

  async (payload) => {
    // сюда прилетает пэйлоад из компонента
    const response = await fetch("/api/editpassword", {
      // сюда кидаем фетч
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.error) {
      throw data.error;
    }

    return data;
  }
);

const updatePhoto = createAsyncThunk("user/updatephoto", async (payload) => {
  const response = await fetch("/api/multer/edit", {
    method: "PUT",
    body: payload,
  });
  const data = await response.json();
  if (data.error) {
    throw data.error;
  }
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    falseMessage: (state, action) => {
      state.checkPassword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        const newUser = action.payload;
        state.user = newUser;
      })
      .addCase(registration.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(registration.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const newUser = action.payload;
        state.user = newUser;
        const message = action.payload.errorMessage;
        state.errorMessage = message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const newUser = action.payload;
        state.user = newUser;
        const message = action.payload.errorMessage;
        state.errorMessage = message;
      })
      .addCase(deleteSession.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteSession.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(editUserInfo.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(editUserInfo.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        const newUserInfo = action.payload;
        state.user = newUserInfo;
      })
      .addCase(changePassword.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        // Успешный случай — загрузка прошла хорошо
        state.checkEditPassword = action.payload.updatePassword;
      })
      .addCase(updatePhoto.rejected, (state, action) => {
        // Сценарий провала — загрузка не увенчалась успехом
        state.error = action.error.message;
      })
      .addCase(updatePhoto.fulfilled, (state, action) => {
        state.user = action.payload.user;
      });
  },
});

export {
  registration,
  loginUser,
  loadUser,
  deleteSession,
  editUserInfo,
  changePassword,
  updatePhoto,
};

export const { falseMessage } = userSlice.actions;

export default userSlice.reducer;
