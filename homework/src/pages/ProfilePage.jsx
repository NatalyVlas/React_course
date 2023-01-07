import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeName, toggleProfile } from '../store/profile/actions'
import { selectName, selectVisible } from "../store/profile/selectors"
import styles from './Profile.module.css'
import { Input } from "../components/UI/Input/Input"
import { Button } from "../components/UI/Button/Button"

export function ProfilePage() {
    // const name = useSelector((store) => store.name) // получаем данные из стор
    const name = useSelector(selectName)
    const visible = useSelector(selectVisible)
    const [value, setValue] = useState('')

    const dispatch = useDispatch() // изменяем данные в стор

    return (
        <>
            <h2 className={styles.name}>My name is {name}</h2>
            <div className={styles.profile}>

                <input
                    type="checkbox"
                    checked={visible}
                    readOnly
                />
                <Button onClick={() => dispatch(toggleProfile())}>Change visible</Button>
                <Input
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
                <Button onClick={() => {
                    dispatch(changeName(value));
                    setValue('')
                }}>Change name</Button>
            </div>
        </>
    )
}