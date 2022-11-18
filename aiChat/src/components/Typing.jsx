import React from "react";

const Typing = ({ isTyping }) => {
  const typingClassName = isTyping
    ? "chat_box mine typing"
    : "chat_box typing";

  return (
    <div className="line">
      <div className={typingClassName} />
    </div>
  );
};

export default Typing;
