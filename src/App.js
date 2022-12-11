import { useState, useEffect } from "react";
import { AUTHOR } from "./constants.js";
import { Form } from "./components/form/form.jsx";
import { MessageList } from "./components/messageList/messageList";
import { ChatsList } from "./components/chatsList/chatsList"



function App() {
  const [messages, setMessages] = useState([])

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage])
  }
  const [chatsList, setChatsList] = useState([
    { id: 1, name: "One chat" },
    { id: 2, name: "Another chat" },
    { id: 3, name: "Three chat" },
  ]);
  
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].author === AUTHOR.user) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          text: 'Thanks for the feedback'
        })
      }, 1500)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messages])

  return (
    <div className="center">
      <header className="App-header">  
        <h1>Messages</h1>
      </header>
      <main className="wrp">
        <ChatsList chatsList={chatsList} />
        <Form addMessage={addMessage}/>
        <MessageList messages={messages}/>
      </main>
    </div>
  );
}

export default App;
