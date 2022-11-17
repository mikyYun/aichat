import React from "react";
import { sending } from "../api/fetch";

const Text = ({updateMessages}) => {
  const [message, setMessage] = React.useState("")

  const updateMessage = (e) => {
    const msg = e.target.value;
    setMessage(msg)
  }

  const clearMessage = () => {
    setMessage("")
  }

  const sendMessage = async () => {
    // console.log(message)
    if (!message) return; 
    updateMessages(message, true)
    clearMessage();
    await sending(message)
      .then(res => {
        const response = res.data.response;
        // return response;
        receiveMessage(response)
      })
      .catch(err => console.error("API ERROR", err))

  }

  const receiveMessage = (msg) => {
    updateMessages(msg, false)
  }

  return (
    <div id="text">
      <input type="text" placeholder="message..." value={message} onChange={updateMessage} />
      <button className="send" onClick={sendMessage}>Send</button>
    </div>
  )
}

export default Text;