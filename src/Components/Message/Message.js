import './Message.scss'
import React from "react"

export const Message = ({ author, text }) => {
    return (
        <div className="message">
            <div className='message-author'>{author}:</div>
            {(author === 'Бот') ? <div className='message-text-bot'>{text}</div> : <div className='message-text'>{text}</div>}
        </div>
    )
}