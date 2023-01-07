import { useParams } from 'react-router-dom'
import styles from "./ChatsPage.module.css"

import { Form } from '../components/Form/Form'
import { MessageList } from '../components/MessageList/MessageList'
import { ChatList } from '../components/ChatList/ChatList'

export function ChatsPage({ messagesDB, chats }) {
    const { chatId } = useParams()

    console.log(messagesDB)

    const messagesChat = chats.find((chat) => chat?.name === chatId)
    const messages = Object.entries(messagesChat.messages).map((mess) => ({
        id: mess[0],
        text: mess[1].text,
        author: mess[1].author,
    }))

    return (<>
        <div>
            <div className={styles.flex}>
                <div>
                    <ChatList chats={chats} />
                </div>
                <div className={styles.margin} >
                    < Form />
                    <MessageList messages={chatId ? messages : []} />
                </div>
            </div>
        </div>
    </>
    )
}