import { useState } from "react"
import { Link } from "react-router-dom"
import { push, set, remove } from "firebase/database"
import styles from './ChatList.module.css'
import { useDispatch } from "react-redux"
import { addChat } from "../../store/messages/actions"
import { messagesRef, getChatById, getMessageListById } from "../../services/firebase"

import { Button } from "../UI/Button/Button"
import { Input } from "../UI/Input/Input"

export function ChatList({ messagesDB, chats }) {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch(addChat(value))

        set(messagesRef, {
            ...messagesDB,
            [value]: {
                name: value
            }
        })
        push(getMessageListById(value), {
            text: 'Chat has been created',
            author: 'Admin',
        })

        setValue('')
    }

    const handleDeleteChat = (chatId) => {
        remove(getChatById(chatId));
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.margin}>
                <Input value={value}
                    onChange={(event) => setValue(event.target.value)}>
                </Input>
                <Button type="submit">Create New Chat</Button>
            </form>
            <ul className={styles.chats}>
                {chats.map((chat) => (
                    <li key={chat.id} className={styles.list}>
                        <Link to={`/chats/${chat.name}`}>
                            {chat.name}
                        </Link>
                        <button onClick={() => dispatch(handleDeleteChat(chat.name))}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
