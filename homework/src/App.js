import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store'
import { firebaseAuth, messagesRef } from './services/firebase'
import { onValue } from 'firebase/database'
import { auth } from './store/profile/actions'

import { Header } from './components/Header/Header'
import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage'
import { ChatList } from './components/ChatList/ChatList'
import { Articles } from './pages/Articles'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { PrivateRoute } from './store/utils/PrivateRoute'
import { PublicRoute } from './store/utils/PublicRoute'


export function App() {

  const dispatch = useDispatch()

  const [messageDB, setMessageDB] = useState({})
  const [chats, setChats] = useState([])

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
      const newChats = Object.entries(data).map((item) => ({
        name: item[0],
        message: item[1].messageList
      }))

      setMessageDB(data)
      setChats(newChats)
    })
  }, [])

  return (
    <>
      {/* <Provider store={store}> */}
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<MainPage />} />
            <Route path='profile' element={<ProfilePage />} />
            {/* <Route path='chats'>
                <Route index element={<ChatList />} />
                <Route path=":chatId" element={<ChatsPage />} />
              </Route> */}
            <Route path='chats' element={<PrivateRoute />}>
              <Route
                index
                element={<ChatList chats={chats} messageDB={messageDB} />}
              />
              <Route path=':chatId' element={<ChatsPage chats={chats} messageDB={messageDB} />} />
            </Route>
            <Route path='articles' element={<Articles />} />
            <Route path='signin' element={<PublicRoute component={<SignIn />} />} />
            <Route path='signup' element={<SignUp />} />
          </Route>
          <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>} /> {/*при переходе не туда) */}
        </Routes>
      </PersistGate>
      {/* </Provider> */}
    </>
  )
}