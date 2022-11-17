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

  const sendMessage = () => {
    // console.log(message)
    updateMessages(message, true)
    clearMessage();
  }

  const receiveMessage = () => {
    const msg = "THIS"

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