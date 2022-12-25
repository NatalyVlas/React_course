import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage'
import { ChatList } from './components/ChatList/ChatList'
import { useState } from 'react'
import { nanoid } from "nanoid"
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

  const chats = Object.keys(messages).map((chat) => ({
    id: nanoid(),
    name: chat
  }))

  const addChat = (newChat) => {
    setMessages({ ...messages, [newChat.name]: [] })
  }

  const onAddMessage = (chatId, newMessage) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage]
    })
  }

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<MainPage />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='chats'>
              <Route index element={<ChatList chats={chats} addChat={addChat} />} />
              <Route path=":chatId" element={<ChatsPage
                chats={chats}
                messages={messages}
                onAddMessage={onAddMessage}
                addChat={addChat} />} />
            </Route>
          </Route>
          <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>} /> {/*при переходе не туда) */}
        </Routes>
      </Provider>
    </>
  )
}