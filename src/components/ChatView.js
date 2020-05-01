import React from 'react';
import useStyles from './styles';

const ChatView = (props) => {
    const { chat, user } = props;
    const classes = useStyles();

    if(chat === undefined) {
        return <main id="chatview-container" className={classes.content}>chat view</main>
    }else{
        return(
            <div>
                <div className={classes.chatHeader}>
                    Your conversation with {chat.users.filter(usr => usr !== user)[0]}
                </div>
                <main id="chatview-container" className={classes.content}>
                    {
                        chat.messages.map((msg, index) => (
                            <div key={index} className={msg.sender === user ? classes.userSent : classes.friendSent}>
                                {msg.message}
                            </div>
                        ))
                    }
                </main>
            </div>
        )
    }
}
 
export default ChatView;