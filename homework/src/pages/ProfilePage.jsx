import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeName, toggleProfile } from '../store/profile/actions'
import { selectName, selectVisible } from "../store/profile/selectors"

export function ProfilePage() {
    // const name = useSelector((store) => store.name) // получаем данные из стор
    const name = useSelector(selectName)
    const visible = useSelector(selectVisible)
    const [value, setValue] = useState('')

    const dispatch = useDispatch() // изменяем данные в стор

    return (
        <>
            <p>Profile Page</p>
            <h2>{name}</h2>
            <input
                type="checkbox"
                checked={visible}
                readOnly
            />
            <button onClick={() => dispatch(toggleProfile())}>Change visible</button>
            <br />
            <input
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button onClick={() => {
                dispatch(changeName(value));
                setValue('')
            }}>Change name</button>
            <br />
        </>
    )
}