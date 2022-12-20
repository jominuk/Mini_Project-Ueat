import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/postSlice";
import user from "../modules/userSlice";

const store = configureStore({ reducer: { post, user } });
export default store;
