import axios from "axios";

const sending = (msg) => {
  return axios.post("http://localhost:5001/chat", {msg})
};

export { sending };