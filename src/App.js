import { useState } from 'react'
import { Header } from './components/header/header'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage';
import { ChatPage } from './pages/ChatPage';
import { ProfilePage } from './pages/ProfilePage';
import { ChatsList } from './components/chatsList/chatsList';
import { Error404 } from './pages/Error404';
import { nanoid } from 'nanoid'

const defaultMessage = {
  default: [
    {
      author: 'user',
      text: 'one text'
    },
    {
      author: 'user',
      text: 'two text'
    },
  ]
}

export function App () {
  
  const [messages, setMessages] = useState(defaultMessage)

  const chats = Object.keys(messages).map((chat)=> ({
      id: nanoid(),
      name: chat
    }))

  const onAddChat = (newChat) => {
      setMessages({
        ...messages,
        [newChat.name]: []
      })
  }
    
  const onAddMessage = (chatId, newMessage) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage]
    })

  }

  return (
  <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<MainPage />}></Route>
          <Route path='profile' element={<ProfilePage />}></Route>
          <Route path='chat' >
            <Route 
              index 
              element={<ChatsList chats={chats} onAddChat={onAddChat}/>}
            />
            <Route 
              path=':chatId' 
              element={<ChatPage 
                onAddMessage={onAddMessage} 
                onAddChat={onAddChat}
                messages={messages}
                chats={chats}
                />}
            />
          </Route>
          <Route path='*' element={<Error404 />}></Route>
        </Route>
    
      </Routes>
      
  </>
  )
}
export default App;