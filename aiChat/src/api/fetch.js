import axios from "axios";

const headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    }

const sending = (msg) => {
  return axios.post("http://localhost:5001/chat/", {msg}, {headers})
  // return axios.post("https://apichatwithai.herokuapp.com/chat", {msg}, {headers})
};

export { sending };