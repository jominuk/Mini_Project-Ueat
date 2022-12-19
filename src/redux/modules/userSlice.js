import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginDB = (payload) => {
  return async function (dispatch) {
    dispatch(serverRequest(true));
    try {
      const login = await axios({
        method: "post",
        url: "http://3.39.25.179:8080/api/login",
        data: {
          username: payload.username,
          password: payload.password,
        },
      });
      const accessToken = login.headers.authorization.split(" ")[1];
      setCookie("token", accessToken, {
        path: "/",
        expire: "after60m",
      });
      dispatch(requestSuccess(true));
      alert("로그인 성공!");
    } catch (error) {
      dispatch(requestError(error));
      alert("아이디어와 비밀번호를 다시 확인해주세요.");
    } finally {
      dispatch(serverRequest(false)); // server request 종료
    }
  };
};
export default userSlice.reducer;
