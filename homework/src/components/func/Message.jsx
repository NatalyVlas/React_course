import styles from './Message.module.css'

export function Message(props) {

    return (
        <>
            <p className={styles.text_style}>{props.text}</p>
        </>
    )
}