import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom"
import { Form } from "../components/form/form.jsx";
import { MessageList } from "../components/messageList/messageList";
import { ChatsList } from "../components/chatsList/chatsList.jsx";
import { selectMessage } from "../store/messages/selectors.js";

export function ChatPage({ messageDB, chats }) {
    
  const {chatId} = useParams()
  console.log('messagesDB', messageDB)
  const messagesChat = chats.find((chat) => chat?.name === chatId)
  const messages = Object.entries(messagesChat.messages).map((mes) => ({
    id: mes[0],
    text: mes[1].text,
    author: mes[1].author,
  }))
  console.log('messages', messagesChat)
  
  if(chatId && !messages[chatId]){
    {
        <Navigate to="/chats" replace/>
    }
  }

  return (
    <div className="center">
      
      <main className="wrp">
        <div className="chatlist_form">
            <ChatsList chats={chats} />
        </div>
        <Form />
        <MessageList messages={chatId ? messages : []}/>
      </main>
    </div>
  );
}


