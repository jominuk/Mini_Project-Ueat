import axios from "axios";
import { getCookie } from "../shared/cookie";

const a = getCookie("token");
console.log(a);
export const instance = axios.create({
  baseURL: "https://sparta.goguma.online",
  headers: {
    // authorization: `Bearer ${a}`,
  },
});
