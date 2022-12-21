// import { useState } from 'react'

export function MessageList({ messages }) {

    return (
        <>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>
                        {message.author}: {message.text}
                    </li>
                ))}
            </ul>
        </>
    )
}
