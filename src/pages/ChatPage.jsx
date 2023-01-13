import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom"
import { Form } from "../components/form/form.jsx";
import { MessageList } from "../components/messageList/messageList";
import { ChatsList } from "../components/chatsList/chatsList.jsx";
import { selectMessage } from "../store/messages/selectors.js";

export function ChatPage({ messageDB, chats }) {
    
  const {chatId} = useParams()
  const messages = useSelector(selectMessage)
  
  if(chatId && !messages[chatId]){
    {
        <Navigate to="/chats" replace/>
    }
  }

  return (
    <div className="center">
      
      <main className="wrp">
        <div className="chatlist_form">
            <ChatsList />
        </div>
        <Form />
        <MessageList messages={chatId ? messages[chatId] : []}/>
      </main>
    </div>
  );
}


