import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/postSlice";
import signup from "../modules/signupSlice";
import idCheck from "../modules/idCheckSlice";

const store = configureStore({ reducer: { post, signup, idCheck } });
export default store;
