import { useState } from 'react'
import { Button } from '../UI/Button/Button'
import { AUTHOR } from '../../constants'
import styles from './Form.module.css'
import { useDispatch } from 'react-redux'
import { addMessageWithReply } from '../../store/messages/actions'
import { useParams } from 'react-router-dom'
import { push } from "firebase/database"
import { getMessageListById } from "../../services/firebase"
import { Input } from '../UI/Input/Input'

export function Form() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const { chatId } = useParams()

    const handleSubmit = (event) => {
        event.preventDefault() // отменяет перезагрузку странички
        dispatch(addMessageWithReply(chatId, {
            author: AUTHOR.user,
            text
        }))
        push(getMessageListById(chatId), {
            author: AUTHOR.user,
            text
        })
        setText('') // очистить инпут
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input value={text}
                    onChange={(event) => setText(event.target.value)}>
                </Input>
                <Button type="submit">Send a message</Button>
            </form>
        </>
    )
}

