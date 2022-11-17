import React from "react";
import "./App.scss";

import Text from "./components/Text";
import Chat from "./components/Chat";
import Header from "./components/Header";
import List from "./components/List";

import getImageNumber from "./helpers/getImage";

function App() {
  const [messages, setMessages] = React.useState([]);
  const [avatar, setAvatar] = React.useState(1)

  const updateMessages = (msg, isMyMessage) => {
    setMessages((prev) => [...prev, { [msg]: isMyMessage }]);
  };

  const updateAvatar = () => {
    const newAvatar = getImageNumber();
    setAvatar(newAvatar)
  }

  return (
    <div className="App">
      <List avatar={avatar}/>
      <Header avatar={avatar} updateAvatar={updateAvatar}/>
      <Chat messages={messages} />
      <Text updateMessages={updateMessages} />
    </div>
  );
}

export default App;
