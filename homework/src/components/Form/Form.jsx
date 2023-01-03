import { useState } from 'react'
import { Button } from '../UI/Button/Button'
import { AUTHOR } from '../../constants'
import styles from './Form.module.css'
import { useDispatch } from 'react-redux'
import { addMessageWithReply } from '../../store/messages/actions'
import { useParams } from 'react-router-dom'
// import ITextField from '@mui/material/TextField'
// import IButton from '@mui/material/Button'

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
        setText('') // очистить инпут
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* <ITextField
                    type="text"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    variant="outlined"
                    placeholder="Enter your message"
                    focused
                    color="success"
                    size="small"
                />
                <IButton
                    variant="contained"
                    type="submit"
                    color="success"
                    size="normal"
                >Send a message</IButton> */}
                <input type="text" value={text}
                    onChange={(event) => setText(event.target.value)}
                    className={styles.input}>
                </input>
                <Button type="submit">Send a message</Button>
            </form>
        </>
    )
}

