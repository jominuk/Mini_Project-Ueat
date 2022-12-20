import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/postSlice";
import signup from "../modules/signupSlice";
import idCheck from "../modules/idCheckSlice";
import user from "../modules/userSlice";

const store = configureStore({ reducer: { post, signup, idCheck, user } });

export default store;
