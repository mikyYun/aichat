import axios from "axios";

const headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    }

const sending = (msg) => {
  return axios.post("http://localhost:5001/chat/", {msg}, {headers})
  // return axios.post("https://apichatwithai.herokuapp.com/chat", {msg}, {headers})
};

export { sending };