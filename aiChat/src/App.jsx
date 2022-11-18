import React from "react";
import "./App.scss";

import Text from "./components/Text";
import Chat from "./components/Chat";
import Header from "./components/Header";
import List from "./components/List";

import getImageNumber from "./helpers/getImage";

function App() {
  const [messages, setMessages] = React.useState([]);
  const [avatar, setAvatar] = React.useState(1);
  const [isTyping, setIsTyping] = React.useState(false);
  const [isWaiting, setIsWaiting] = React.useState(false);


  const sessionStorage = window.sessionStorage;

  const updateMessages = (msg, isMyMessage) => {
    setMessages((prev) => [...prev, { [msg]: isMyMessage }]);
  };

  const switchAvatar = () => {
    const newAvatar = getImageNumber();
    if (avatar === newAvatar) switchAvatar();
    setAvatar(newAvatar);
  };

  const selectAvatar = (e) => {
    const val = Number(e.target.getAttribute("value"));
    if (!val) return;
    setAvatar(val);
  };

  const saveMessages = () => {
    const messageHistory = JSON.parse(sessionStorage.getItem("msg")) || {}
    messageHistory[avatar] = messages


    sessionStorage.setItem("msg", JSON.stringify(messageHistory));
  };

  React.useEffect(() => {
    saveMessages();
  }, [messages]);

  React.useEffect(() => {
    const messageWithThisAvatar = JSON.parse(sessionStorage.getItem("msg"))[avatar];
    messageWithThisAvatar ? setMessages(messageWithThisAvatar) : setMessages([])
  }, [avatar]);

  return (
    <div className="App">
      <List avatar={avatar} selectAvatar={selectAvatar} />
      <Header avatar={avatar} switchAvatar={switchAvatar} />
      <Chat messages={messages} isTyping={isTyping} isWaiting={isWaiting}/>
      <Text updateMessages={updateMessages} setIsTyping={setIsTyping} setIsWaiting={setIsWaiting} messages={messages}/>
    </div>
  );
}

export default App;
