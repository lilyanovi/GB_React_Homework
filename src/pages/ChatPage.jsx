import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom"
import { AUTHOR } from "../constants.js";
import { Form } from "../components/form/form.jsx";
import { MessageList } from "../components/messageList/messageList";
import { ChatsList } from "../components/chatsList/chatsList.jsx";

export function ChatPage({ onAddChat, onAddMessage, messages, chats }) {
    
    const {chatId} = useParams()

  useEffect(() => {
    if (chatId && messages[chatId].length > 0 && messages[chatId][messages[chatId].length - 1].author === AUTHOR.user) {
      const timeout = setTimeout(() => {
        onAddMessage(chatId, {
          author: AUTHOR.bot,
          text: 'Thanks for the feedback'
        })
      }, 1500)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [chatId, messages])

  const handleAddMessage = (message) => {
    if (chatId) {onAddMessage(chatId, message)}
  }

  if(chatId && !messages[chatId]){
    {
        <Navigate to="/chats" replace/>
    }
  }

  return (
    <div className="center">
      
      <main className="wrp">
        <div className="chatlist_form">
            <ChatsList chats={chats} onAddChat={onAddChat}/>
        </div>
        <Form addMessage={handleAddMessage}/>
        <MessageList messages={chatId ? messages[chatId] : []}/>
      </main>
    </div>
  );
}


