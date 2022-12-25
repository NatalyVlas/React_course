import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage'
import { ChatList } from './components/ChatList/ChatList'
import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

const defaultMessages = {
  default: [
    {
      author: 'user',
      text: 'one text'
    },
    {
      author: 'user',
      text: 'two text'
    }
  ]
}

export function App() {
  const [messages, setMessages] = useState(defaultMessages)

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<MainPage />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='chats'>
              <Route index element={<ChatList />} />
              <Route path=":chatId" element={<ChatsPage />} />
            </Route>
          </Route>
          <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>} /> {/*при переходе не туда) */}
        </Routes>
      </Provider>
    </>
  )
}