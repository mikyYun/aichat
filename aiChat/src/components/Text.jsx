import React from "react";
import { sending } from "../api/fetch";
import SendIcon from "@mui/icons-material/Send";

const Text = ({ updateMessages, setIsTyping, setIsWaiting, messages }) => {
  const [message, setMessage] = React.useState("");
  const DENY_MESSAGE = "Sorry I'm busy, talk to me later";

  const updateMessage = (e) => {
    const msg = e.target.value;
    setMessage(msg);
    msg ? setIsTyping(true) : setIsTyping(false);
  };

  const clearMessage = () => {
    setMessage("");
  };

  const createChatHistory = () => {
    const groupMessages = Object.values(messages);
    let history = ``;
    groupMessages.forEach((msg) => {
      const chat = Object.keys(msg)[0];
      history += `\n${chat}`;
    });
    history += `\n${message}`;
    return history;
  };

  const sendMessage = async () => {
    // console.log(message)
    if (!message) return;
    updateMessages(message, true);
    setIsTyping(false);
    clearMessage();
    setIsWaiting(true);

    const groupMessages = createChatHistory();

    await sending(groupMessages)
      .then((res) => {
        const msg = res.data.response;
        msg ? updateMessages(msg, false) : updateMessages(DENY_MESSAGE, false);
        setIsWaiting(false);
      })
      .catch((err) => console.error("API ERROR", err));
  };

  const isEnter = (e) => {
    const enter = e.keyCode === 13 && true;
    if (enter) sendMessage();
  };

  return (
    <div id="text">
      <input
        type="text"
        placeholder="message..."
        value={message}
        onChange={updateMessage}
        autoFocus
        onKeyDown={isEnter}
      />
      <button className="send" onClick={sendMessage}>
        <span className="icon">
          <SendIcon />
        </span>
        Send
      </button>
    </div>
  );
};

export default Text;
