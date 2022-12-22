import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../instance/instance";
import setToken from "../../Pattern/setToken";
import { setCookie } from "../../shared/cookie";

export const __loginUser = createAsyncThunk(
  "LOGIN_USER",
  async (payload, thunkAPI) => {
    try {
      setToken();
      const { data } = await instance.post("/auth/login", payload);
      console.log(data.nickname);
      setCookie("token", data.token, {
        path: "/",
        expire: "after60m",
      });
      localStorage.setItem("nickname", data.nickname);
      alert("로그인 성공!");
      return thunkAPI.fulfillWithValue(payload);
    } catch ({ response }) {
      alert("아이디어와 비밀번호를 다시 확인해주세요.");
      return thunkAPI.rejectWithValue(response);
    }
  }
);

const initialState = {
  email: "",
  nickname: "",
  login: false,
  isLoading: false,
  error: null,
  errorMessage: "",
};

const userSlice = createSlice({
  name: "LOGIN_USER",
  initialState,
  reducers: {
    loginCheck: (state, action) => {
      state.login = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__loginUser.pending, (state) => {
        console.log("팬딩");
        state.isLoading = true;
      })
      .addCase(__loginUser.fulfilled, (state, action) => {
        console.log("fulfilled");
        state.isLoading = false;
        state.login = true;
      })
      .addCase(__loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.data.message;
      });
  },
});

export const { loginCheck } = userSlice.actions;
export default userSlice.reducer;
