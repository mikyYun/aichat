import axios from "axios";

const sending = (msg) => {
  return axios.post("https://chatwithai.herokuapp.com/", {msg})
};

export { sending };