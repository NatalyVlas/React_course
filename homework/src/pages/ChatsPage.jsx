import { Message } from '../components/Message/Message'
import { Form } from '../components/Form/Form'
import { MessageList } from '../components/MessageList/MessageList'
import { ChatList } from '../components/ChatList/ChatList'
// import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import styles from "./ChatsPage.module.css"
import { useSelector } from 'react-redux'
import { selectMessage } from '../store/messages/selectors'

export function ChatsPage() {
    const { chatId } = useParams()
    const messages = useSelector(selectMessage)

    // useEffect(() => {
    //     if (chatId &&
    //         messages[chatId].length > 0 &&
    //         messages[chatId][messages[chatId].length - 1].author === 'user') {
    //         const timeout = setTimeout(() => {
    //             onAddMessage(chatId, {
    //                 author: 'bot',
    //                 text: 'please, write something else'
    //             })
    //         }, 1500)

    //         return () => {
    //             clearTimeout(timeout) // остановить бота
    //         }
    //     }
    // }, [chatId, messages])

    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />
    }

    return (<>
        <Message text="This is a Chat" />
        <div className={styles.flex}>
            <div>
                <ChatList />
            </div>
            <div>
                < Form />
                <MessageList messages={chatId ? messages[chatId] : []} />
            </div>

        </div>
    </>
    )
}