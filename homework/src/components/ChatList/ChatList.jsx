import { useState } from "react"
import { Link } from "react-router-dom"
import { set } from "firebase/database"
import { messagesRef } from "../../services/firebase"

import styles from './ChatList.module.css'
import { Button } from "../UI/Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { addChat, deleteChat } from "../../store/messages/actions"
import { selectChat } from "../../store/messages/selectors"

export function ChatList({ chats, messageDB }) {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    // const chats = useSelector(selectChat, (prev, next) => prev.length === next.length)

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch(addChat(value))

        set(messagesRef, {
            ...messageDB,
            [value]: {
                name: value
            }
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    className={styles.input} />
                <Button type="submit">Create New Chat</Button>
            </form>
            <ul>
                {chats.map((chat) => (
                    <li key={chat.id}>
                        <Link to={`/chats/${chat.name}`}>
                            {chat.name}
                        </Link>
                        <button onClick={() => dispatch(deleteChat(chat.name))}>&times;</button>
                    </li>
                ))}
            </ul>
        </>
    )
}


// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import styles from './ChatList.module.css'

// export function ChatList(props) {

//     return (
//         <>
//             <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//                 <Divider />
//                 <nav aria-label="secondary mailbox folders">
//                     <List className={styles.color}>
//                         <ListItem disablePadding >
//                             <ListItemButton>
//                                 <ListItemText primary="Chat 1" />
//                             </ListItemButton>
//                         </ListItem>
//                         <ListItem disablePadding>
//                             <ListItemButton component="a" href="#simple-list">
//                                 <ListItemText primary="Chat 2" />
//                             </ListItemButton>
//                         </ListItem>
//                         <ListItem disablePadding>
//                             <ListItemButton component="a" href="#simple-list">
//                                 <ListItemText primary="Chat 3" />
//                             </ListItemButton>
//                         </ListItem>
//                     </List>
//                 </nav>
//             </Box>
//         </>
//     )
// }