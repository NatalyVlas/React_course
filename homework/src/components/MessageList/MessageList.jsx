import styles from "./MessageList.module.css"

export function MessageList({ messages }) {

    return (
        <>
            <ul className={styles.messages}>
                {messages.map((message, index) => (
                    <li key={index} className={styles.messages_li}>
                        {message.author}: {message.text}
                    </li>
                ))}
            </ul>
        </>
    )
}
