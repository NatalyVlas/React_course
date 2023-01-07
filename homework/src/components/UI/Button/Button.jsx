import styles from './Button.module.css'

export function Button(props) {

    return (
        <>
            <button {...props} className={styles.btn}>{props.children}</button>
        </>
    )
}