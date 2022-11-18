import React from 'react'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { List } from '@mui/material'

export const ChatList = ({ chats }) => {
    const chatsArr = chats

    return (
        <List>
            {chats.map((chat) => {
                return (
                    <ListItem key={chat.id} disablePadding>
                        <ListItemButton>
                            <ListItemText style={{ color: "rgb(0, 168, 107)" }} primary={chat.name} />
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>
    )
}