import React from "react";
import Line from "./Line";
import Typing from "./Typing";

const Chat = ({ messages, isTyping, isWaiting }) => {
  const ref = React.useRef(null)

  const drawChats = () => {
    return messages.map((message, index) => {
      return <Line message={message} key={index} />;
    });
  };

  const scrollToBottom = () => {
    ref.current.scrollIntoView({behavior: "smooth"})
  }

  React.useEffect(() => {
    scrollToBottom();
  }, [messages])


  return (
    <div id="chat">
      <div className="line">
        <div className="chat_box">Hello</div>
      </div>
      <div className="line">
        <div className="chat_box mine">Hi!</div>
      </div>
      {drawChats()}
      {(isTyping || isWaiting ) &&  <Typing isTyping={isTyping}/>}
      <div className="bottom" ref={ref}></div>
    </div>
  );
};

export default Chat;
