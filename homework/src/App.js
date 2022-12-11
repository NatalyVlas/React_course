import { Message } from './components/Message/Message'
import { Form } from './components/Form/Form'
import { MessageList } from './components/MessageList/MessageList'
import { ChatList } from './components/ChatList/ChatList'
import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <ChatList />
        </Grid>
        <Grid item xs={8}>
          <Form addMessage={addMessage} />
          <MessageList messages={messages} />
        </Grid>
      </Grid>
    </Box>
  </>
  )
}