import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { auth } from "../store/profile/actions"
import { Button } from "../components/UI/Button/Button"
import { signIn } from '../services/firebase'

export function SignIn() {
    const [inputs, setInputs] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')
        setLoading(true)

        try {
            await signIn(inputs.email, inputs.password)
            dispatch(auth(true))
            navigate('/chats')
        } catch (error) {
            setError(error.message)
            setInputs({ email: '', password: '' })
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} style={{ margin: '15px', color: '#401A04' }}>
                <p>Email:</p>
                <input type="text"
                    name="email"
                    value={inputs.email}
                    onChange={(event) => setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }))}
                />
                <p>Password:</p>
                <input type="text"
                    name="password"
                    value={inputs.password}
                    onChange={(event) => setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }))}
                />
                <br />
                <Button style={{ marginTop: '15px' }}>login</Button>
            </form>
            {loading && (
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                    <CircularProgress />
                </Box>)}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    )
}
