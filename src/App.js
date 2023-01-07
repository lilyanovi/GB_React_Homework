import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { MainPage } from './pages/MainPage';
import { ChatPage } from './pages/ChatPage';
import { ProfilePage } from './pages/ProfilePage';
import { AboutWithConnect } from './pages/AboutPage'
import { Error404 } from './pages/Error404';

import { Header } from './components/header/header'
import { ChatsList } from './components/chatsList/chatsList';

import { defaultContext, ThemeContext } from './utils/ThemeContext'
import { store, persistor } from './store'



export function App () {
  
  const [theme, setTheme] = useState(defaultContext.theme)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeContext.Provider value={{
          theme, toggleTheme
        }}>
            <Routes>
              <Route path='/' element={<Header />}>
                <Route index element={<MainPage />}></Route>
                <Route path='profile' element={<ProfilePage />}></Route>
                <Route path='about' element={< AboutWithConnect  />}></Route>
                <Route path='chat' >
                  <Route 
                    index 
                    element={<ChatsList />}
                  />
                  <Route 
                    path=':chatId' 
                    element={<ChatPage />}
                  />
                </Route>
                <Route path='*' element={<Error404 />}></Route>
              </Route>
          
            </Routes>
        </ThemeContext.Provider>
      </PersistGate>
    </Provider>
  </>
  )
}
export default App;