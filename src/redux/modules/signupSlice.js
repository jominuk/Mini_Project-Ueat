import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  nickname: "",
  email: "",
  password: "",
  passwordConfirm: "",
  msg: "",
};

export const __signUp = createAsyncThunk(
  "auth/signUp",
  async ({ nickname, email, password, passwordConfirm }, thunkAPI) => {
    try {
      const a = { nickname, email, password, passwordConfirm };
      const postSignup = await axios.post(
        "https://sparta.goguma.online/auth/register",
        a
      );
      console.log("🚀 ~ file: signupSlice.js:21 ~ postSignup", postSignup);
      return thunkAPI.fulfillWithValue(postSignup.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // 리듀서 함수 정의
  },
  extraReducers: {
    [__signUp.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__signUp.fulfilled]: (state, action) => {
      // API 요청이 성공한 경우 상태를 API 응답 데이터로 업데이트
      state.msg = action.payload;
      state.isLoading = false;
    },
    [__signUp.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { postSignup } = authSlice.actions;

export default authSlice.reducer;
