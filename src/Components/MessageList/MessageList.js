import { Message } from '../Message/Message'
import React from "react"

export const MessageList = ({ messages }) => {
    return (
        messages.map((message) => <Message author={message.author} text={message.text} key={message.id} />)
    )
}