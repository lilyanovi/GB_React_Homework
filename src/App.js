import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { MainPage } from './pages/MainPage';
import { ChatPage } from './pages/ChatPage';
import { ProfilePage } from './pages/ProfilePage';
import { AboutWithConnect } from './pages/AboutPage'
import { Articles } from './pages/Articles';
import { Error404 } from './pages/Error404';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';

import { Header } from './components/header/header'
import { ChatsList } from './components/chatsList/chatsList';

import { firebaseAuth, messagesRef } from './services/firebase'
import { onValue } from "firebase/database";

import { defaultContext, ThemeContext } from './utils/ThemeContext'
import { persistor } from './store'
import { PrivateRoute } from './utils/PrivateRoute';
import { PublicRoute } from './utils/PublicRoute';
import { auth } from './store/profile/actions'




export function App () {
  
  const dispatch = useDispatch()

  const [theme, setTheme] = useState(defaultContext.theme)

  const [messageDB, setMessageDB] = useState({})
  const [chats, setChats] = useState([])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(auth(true))
      } else {
        dispatch(auth(false))
      }
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val()
      console.log('snapshot', data)

     const newChats = Object.entries(data).map((item) => ({
        name: item[0],
        message: item[1].messageList
      }))
      console.log(newChats)

      setMessageDB(data)
      setChats(newChats)
    })
  }, [])

  return (
  <>
   
      <PersistGate persistor={persistor}>
        <ThemeContext.Provider value={{
          theme, toggleTheme
        }}>
            <Routes>
              <Route path='/' element={<Header />}>
                <Route index element={<MainPage />}></Route>
                <Route path='profile' element={<ProfilePage />}></Route>
                <Route path='about' element={< AboutWithConnect  />}></Route>
                <Route path='chat' element={<PrivateRoute />}>
                  <Route 
                    index 
                    element={<ChatsList chats={chats} messageDB={messageDB}/>}
                  />
                  <Route 
                    path=':chatId' 
                    element={<ChatPage chats={chats} messageDB={messageDB}/>}
                  />
                </Route>
                <Route path='articles' element={< Articles />}></Route>
                <Route path='signin' element={< PublicRoute component={<SignIn/>}/>}></Route>
                <Route path='signup' element={< SignUp />}></Route>
                <Route path='*' element={<Error404 />}></Route>
              </Route>
          
            </Routes>
        </ThemeContext.Provider>
      </PersistGate>
   
  </>
  )
}
export default App;