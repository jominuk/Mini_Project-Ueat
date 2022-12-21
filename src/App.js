import React from "react";
import { useDispatch } from "react-redux";
import setToken from "./Pattern/setToken";
import { loginCheck } from "./redux/modules/userSlice";
import { getCookie } from "./shared/cookie";
import Router from "./shared/Router";

function App() {
  const dispatch = useDispatch();
  const accessToken = getCookie("token");

  if (accessToken) {
    setToken(accessToken);
    dispatch(loginCheck(true));
  }
  return <Router />;
}

export default App;
