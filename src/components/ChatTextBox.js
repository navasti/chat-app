import React, {useState} from 'react';
import { TextField } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import useStyles from './styles';

const ChatTextBox = (props) => {
    const classes = useStyles();
    const [chatText, setChatText] = useState('')

    const messageValid = txt => txt && txt.replace(/\s/g, '').length;
    const userTyping = e => {
        e.keyCode === 13 ? submitMessage() : setChatText(e.target.value)
    }
    const userClickedInput = () => {
        console.log('Clicked input')
    }
    const submitMessage = () => {
        if(messageValid(chatText)){
            props.submitMessageFn(chatText)
            document.getElementById('chatTextBox').value = '';
        }
    }
    return ( 
        <div className={classes.chatTextBoxContainer}>
            <TextField placeholder="Type message..." 
            onKeyUp={e => userTyping(e)}
            className={classes.chatTextBox}
            id="chatTextBox"
            onFocus={userClickedInput}/>
            <Send onClick={submitMessage} className={classes.sendBtn}/>
        </div>
     );
}
 
export default ChatTextBox;