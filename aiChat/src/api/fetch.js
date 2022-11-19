import axios from "axios";

const headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    }

const sending = (msg) => {
  return axios.post("https://chatwithai.herokuapp.com/", {msg}, {headers})
};

export { sending };