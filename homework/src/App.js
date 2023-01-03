import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
// import { useState } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'

import { Header } from './components/Header/Header'
import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage'
import { ChatList } from './components/ChatList/ChatList'

// const defaultMessages = {
//   default: [
//     {
//       author: 'user',
//       text: 'one text'
//     },
//     {
//       author: 'user',
//       text: 'two text'
//     }
//   ]
// }

export function App() {
  // const [messages, setMessages] = useState(defaultMessages)

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
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
        </PersistGate>
      </Provider>
    </>
  )
}