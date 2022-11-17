import React from "react";
import Line from "./Line";

const Chat = ({messages}) => {
  console.log("MM", messages)

  React.useEffect(() => {

  }, [messages])

  const drawChats = () => {
    return messages.map((message, index) => {
      
      return (
        <Line message={message} key={index}/>
      )
    })
  }

  return (
    <div id="chat">
      <div className="line">
        <div className="chat_box">Hello</div>
      </div>
      <div className="line">
        <div className="chat_box mine">Hi!</div>
      </div>
      {drawChats()}
    </div>
  )
}

export default Chat;