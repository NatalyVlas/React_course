import { useState } from 'react'
import { Button } from '../UI/Button/Button'
import styles from './Form.module.css'

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
                <input type="text" value={value}
                    onChange={(event) => setValue(event.target.value)}
                    className={styles.input_style}>
                </input>
                <Button type="submit">Send a message</Button>
            </form>
        </>
    )
}

