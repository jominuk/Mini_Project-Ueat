import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/postSlice";
import signup from "../modules/signupSlice";
import idCheck from "../modules/idCheckSlice";
import user from "../modules/userSlice";
import nickCheck from "../modules/nickCheckSlice";
import commentPost from "../modules/commentSlice";

const store = configureStore({
  reducer: { post, signup, idCheck, user, nickCheck, commentPost },
});

export default store;
