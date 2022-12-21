import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  nickname: "",
  nickCheck: false,
  msg: "",
};

export const __nickCheck = createAsyncThunk(
  "auth/nickCheck",
  async (nickname, thunkAPI) => {
    try {
      console.log(nickname);
      const validateNick = await axios.post(
        "https://sparta.goguma.online/auth/register/check-nickname",
        nickname
      );
      validateNick.data.result
        ? alert("사용가능한 닉네임 입니다.")
        : alert("중복 된 닉네임 입니다.");
      return thunkAPI.fulfillWithValue(validateNick.data);
    } catch (error) {
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
    [__nickCheck.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__nickCheck.fulfilled]: (state, action) => {
      // API 요청이 성공한 경우 상태를 API 응답 데이터로 업데이트
      state.nickCheck = action.payload.result;
      state.isLoading = false;
    },
    [__nickCheck.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { validateNick } = authSlice.actions;

export default authSlice.reducer;
