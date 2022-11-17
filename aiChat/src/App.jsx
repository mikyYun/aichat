import { useState } from 'react'
import './App.scss'

import Text from './components/Text'
import Chat from './components/Chat'

function App() {
  const [messages, setMessages] = useState([])

  const updateMessages = (msg, isMyMessage) => {
    setMessages((prev) => ([
      ...prev,
      {[msg]: isMyMessage}
    ]))
  }

  return (
    <div className="App">
      <Chat messages={messages}/>
      <Text updateMessages={updateMessages}/>
    </div>
  )
}

export default App
