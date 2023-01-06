import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { useDispatch } from "react-redux"
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { Button } from "../components/UI/Button/Button"
import { signUp } from "../services/firebase"

export function SignUp() {
    const [inputs, setInputs] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    // const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')
        setLoading(true)

        try {
            await signUp(inputs.email, inputs.password)
            navigate('/signin')
        } catch (error) {
            setError(error.message)
            setInputs({ email: '', password: '' })
        } finally {
            setLoading(false)
        }

        // if (inputs.email === 'home' && inputs.password === '1234') {
        //     dispatch(auth(true))
        //     navigate('/')
        // } else {
        //     setError('Email or password failed')
        //     setInputs({ email: '', password: '' })
        // }
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
                <Button style={{ marginTop: '15px' }}>SignUp</Button>
            </form>
            {loading && (
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                    <CircularProgress />
                </Box>)}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    )
}
