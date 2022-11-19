import axios from "axios";

const headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    }

const sending = (msg) => {
  return axios.post("https://apichatwithai.herokuapp.com/chat", {msg}, {headers})
};

export { sending };