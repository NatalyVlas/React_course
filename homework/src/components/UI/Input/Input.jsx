import styles from './Input.module.css'

export function Input(props) {

    return (
        <>
            <input type="text" {...props} className={styles.input}></input>
        </>
    )
}