import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/postSlice";
import signup from "../modules/signupSlice";
import idCheck from "../modules/idCheckSlice";
import user from "../modules/userSlice";
import nickCheck from "../modules/nickCheckSlice";

const store = configureStore({
  reducer: { post, signup, idCheck, user, nickCheck },
});

export default store;
