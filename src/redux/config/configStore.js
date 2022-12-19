import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/postSlice";

const store = configureStore({ reducer: { post } });
export default store;
