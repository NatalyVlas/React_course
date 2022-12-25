import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeName, selectCheckbox } from '../store/profile/actions'

export function ProfilePage() {
    const name = useSelector((store) => store.name) // получаем данные из стор
    const [value, setValue] = useState('')

    const dispatch = useDispatch() // изменяем данные в стор

    return (
        <>
            <p>Profile Page</p>
            <h2>{name}</h2>
            <input
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button onClick={() => {
                console.log(value);
                dispatch(changeName(value));
                setValue('')
            }}>Change name</button>
            <br />
            <label>choose me
                <input
                    type="checkbox"
                    value={value}
                    onClick={() => dispatch(selectCheckbox(value))}
                />
            </label>
        </>
    )
}