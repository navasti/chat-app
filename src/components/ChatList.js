import React from 'react';
import useStyles from './styles';
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography,
    Divider,
    Button,
    // ListItemIcon,
} from '@material-ui/core'
// import { NotificationImportant } from '@material-ui/icons'

const ChatList = (props) => {
    // styles
    const classes = useStyles();
    // state setters
    const newChat = () => {
        console.log('new chat')
    }
    const selectChat = (index) => props.selectChatFn(index);

    if(props.chats.length > 0){
        return(
            <main className={classes.root}>
                <Button variant='contained' fullWidth color='primary' className={classes.newChatBtn} onClick={newChat}>
                    New Message
                </Button>
                <List>
                    {
                        props.chats.map((chat, index) => (
                            <div key={index}>
                                <ListItem onClick={() => selectChat(index)} 
                                className={classes.listItem}
                                selected={props.selectedChatIndex === index}
                                alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt='avatar'>
                                            {chat.users.filter(user => user !== props.userEmail)[0].split('')[0]}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText 
                                        primary={chat.users.filter(user => user !== props.userEmail)[0]}
                                        secondary={
                                            <>
                                            <Typography component='span' color='textPrimary'>
                                                {chat.messages[chat.messages.length - 1].message.substring(0, 30)}
                                            </Typography>
                                            </>
                                        }
                                    >
                                    </ListItemText>
                                </ListItem>
                                <Divider/>
                            </div>
                        ))
                    }
                </List>
            </main>
        )
    }else{
        return(
            <main className={classes.root}>
                <Button variant='contained' fullWidth onClick={newChat} className={classes.newChatBtn} color='primary'>
                    New message
                </Button>
                <List></List>
            </main>
        )
    }
}
 
export default ChatList;