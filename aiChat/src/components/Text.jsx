import React from "react";
import { sending } from "../api/fetch";

const Text = ({ updateMessages }) => {
  const [message, setMessage] = React.useState("");
  const DENY_MESSAGE = "Sorry I'm busy, talk to me later";

  const updateMessage = (e) => {
    const msg = e.target.value;
    setMessage(msg);
  };

  const clearMessage = () => {
    setMessage("");
  };

  const sendMessage = async () => {
    // console.log(message)
    if (!message) return;
    updateMessages(message, true);
    clearMessage();
    await sending(message)
      .then((res) => {
        const msg = res.data.response;
        msg ? updateMessages(msg, false) : updateMessages(DENY_MESSAGE, false);
      })
      .catch((err) => console.error("API ERROR", err));
  };

  return (
    <div id="text">
      <input
        type="text"
        placeholder="message..."
        value={message}
        onChange={updateMessage}
      />
      <button className="send" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default Text;
