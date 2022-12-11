import { useState } from 'react'
// import { Button } from '../UI/Button/Button'
import styles from './Form.module.css'
import ITextField from '@mui/material/TextField'
import IButton from '@mui/material/Button'

export function Form({ addMessage }) {
    const [value, setValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault() // отменяет перезагрузку странички
        addMessage({
            author: 'user',
            text: value
        })
        setValue('') // очистить инпут
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <ITextField
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
                >Send a message</IButton>
                {/* <input type="text" value={value}
                    onChange={(event) => setValue(event.target.value)}
                    className={styles.input_style}>
                </input> */}
                {/* <Button type="submit">Send a message</Button> */}
            </form>
        </>
    )
}

