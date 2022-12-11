import { Message } from './components/Message/Message'
import { Form } from './components/Form/Form'
import { MessageList } from './components/MessageList/MessageList'
import { useState, useEffect } from 'react'

export function App() {
  const [messages, setMessages] = useState([])

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage])
  }

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].author === 'user') {
      const timeout = setTimeout(() => {
        addMessage({
          author: 'bot',
          text: 'please, write something else'
        })
      }, 1500)

      return () => {
        clearTimeout(timeout) // остановить бота
      }
    }
  }, [messages])

  return (<>
    <Message text="This is a Chat" />
    <Form addMessage={addMessage} />
    <MessageList messages={messages} />
  </>
  )
}