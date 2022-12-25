import { Message } from '../components/Message/Message'
import { Form } from '../components/Form/Form'
import { MessageList } from '../components/MessageList/MessageList'
import { ChatList } from '../components/ChatList/ChatList'
import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import styles from "./ChatsPage.module.css"

export function ChatsPage({ addChat, onAddMessage, messages, chats }) {
    // const [messages, setMessages] = useState([])
    const { chatId } = useParams()

    // const addMessage = (newMessage) => {
    //     setMessages([...messages, newMessage])
    // }

    useEffect(() => {
        if (chatId &&
            messages[chatId].length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === 'user') {
            const timeout = setTimeout(() => {
                onAddMessage(chatId, {
                    author: 'bot',
                    text: 'please, write something else'
                })
            }, 1500)

            return () => {
                clearTimeout(timeout) // остановить бота
            }
        }
    }, [chatId, messages])

    const handleAddMessage = (message) => {
        if (chatId) {
            onAddMessage(chatId, message)
        }
    }

    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />
    }

    return (<>
        <Message text="This is a Chat" />
        <div className={styles.flex}>
            <div>
                <ChatList chats={chats} addChat={addChat} />
            </div>
            <div>
                < Form addMessage={handleAddMessage} />
                <MessageList messages={chatId ? messages[chatId] : []} />
            </div>

        </div>
    </>
    )
}