import { instance } from "../instance/instance";

const setToken = (accessToken) => {
  if (accessToken) {
    instance.defaults.headers.common["authorization"] = `Bearer ${accessToken}`;
  } else {
    delete instance.defaults.headers.common["authorization"];
  }
};

export default setToken;
