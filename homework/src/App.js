import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'

import { Header } from './components/Header/Header'
import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage'
import { ChatList } from './components/ChatList/ChatList'
import { Articles } from './pages/Articles'

export function App() {

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
              <Route path='articles' element={<Articles />} />
            </Route>
            <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>} /> {/*при переходе не туда) */}
          </Routes>
        </PersistGate>
      </Provider>
    </>
  )
}