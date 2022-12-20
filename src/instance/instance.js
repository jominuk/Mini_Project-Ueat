import axios from "axios";
import { getCookie } from "../shared/cookie";

export const instance = axios.create({
  baseURL: "https://sparta.goguma.online",
  headers: {
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlhdCI6MTY3MTUzNDQ0MiwiZXhwIjoxNjcxNTM4MDQyfQ.H3CqMDgIYgg7cKhYBrZ2kiph3xWNrtgGXDG0-M2XpWs`,
  },
});
