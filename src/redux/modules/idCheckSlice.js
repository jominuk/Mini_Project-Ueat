import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  email: "",
  idCheck: false,
  msg: "",
};

export const __idCheck = createAsyncThunk(
  "auth/idCheck",
  async (email, thunkAPI) => {
    try {
      //   const idVal = { email };
      const validateID = await axios.post(
        "https://sparta.goguma.online/auth/register/check-id",
        { email }
      );
      validateID.data.result
        ? alert("사용가능한 이메일 입니다.")
        : alert("중복 된 이메일 입니다.");
      return thunkAPI.fulfillWithValue(validateID.data);
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
    [__idCheck.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__idCheck.fulfilled]: (state, action) => {
      // API 요청이 성공한 경우 상태를 API 응답 데이터로 업데이트
      state.idCheck = action.payload.result;
      state.isLoading = false;
    },
    [__idCheck.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { validateID } = authSlice.actions;

export default authSlice.reducer;
