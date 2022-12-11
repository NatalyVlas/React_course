// import { useState } from 'react'

export function MessageList({ messages }) {

    return (
        <>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message.text}</li>
                ))}
            </ul>
        </>
    )
}