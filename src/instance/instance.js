import axios from "axios";
import { getCookie } from "../shared/cookie";

const accessToken = getCookie("token");

export const instance = axios.create({
  baseURL: "https://sparta.goguma.online",
  headers: {
    authorization: `Bearer ${accessToken}`,
  },
});
