import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from './SignInOut.module.css'
// import { useDispatch } from "react-redux"
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { Button } from "../components/UI/Button/Button"
import { signUp } from "../services/firebase"
import { Input } from "../components/UI/Input/Input"

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

    }
    return (
        <>
            <form onSubmit={handleSubmit} style={{ margin: '20px', color: '#401A04' }}>
                <label>Email:
                    <br />
                    <Input
                        name="email"
                        value={inputs.email}
                        onChange={(event) => setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }))}
                    /></label>
                <br />
                <label>Password:
                    <br />
                    <Input
                        name="password"
                        value={inputs.password}
                        onChange={(event) => setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }))}
                    /></label>
                <br />
                <Button style={{ marginTop: '30px', marginLeft: '20px' }}>SignUp</Button>
            </form>
            {loading && (
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                    <CircularProgress />
                </Box>)}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    )
}
