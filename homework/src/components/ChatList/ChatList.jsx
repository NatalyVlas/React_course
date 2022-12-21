import { useState } from "react"
import { nanoid } from "nanoid"
import { Link } from "react-router-dom"
import styles from './ChatList.module.css'
import { Button } from "../UI/Button/Button"

export function ChatList({ addChat, chats }) {
    const [value, setValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addChat({
            id: nanoid(),
            name: value
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