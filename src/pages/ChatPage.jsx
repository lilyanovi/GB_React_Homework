import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom"
import { Form } from "../components/form/form.jsx";
import { MessageList } from "../components/messageList/messageList";
import { ChatsList } from "../components/chatsList/chatsList.jsx";
import { selectMessage } from "../store/messages/selectors.js";
import { AUTHOR } from "../constants.js";
import { useDispatch } from "react-redux"; 
import { messagesReducer } from "../store/messages/reducer.js";
import { addMessageBot } from "../store/messages/actions.js"; 

export function ChatPage() {
    
  const {chatId} = useParams()
  const messages = useSelector(selectMessage)
  const dispatch = useDispatch()
  

 useEffect(() => {
    if (chatId && messages[chatId].length > 0 && messages[chatId][messages[chatId].length - 1].author === AUTHOR.user) {
      const timeout = setTimeout(() => {
    dispatch(addMessageBot(chatId))    
      }, 1500)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [chatId, messages])

  

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


