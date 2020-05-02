import React, {useState, useEffect, useRef} from 'react'
import ChatList from './ChatList'
import firebase from 'firebase'
import { Button } from '@material-ui/core'
import useStyles from './styles';
import ChatView from './ChatView'
import ChatTextBox from './ChatTextBox';

const Dashboard = (props) => {
    // state
    const [selectedChat, setSelectedChat] = useState(null)
    const [email, setEmail] = useState(null)
    const [newChatFormVisible, setNewChatFormVisible] = useState(false)
    const [chats, setChats] = useState([])
    const isMountedRef = useRef(null)
    // styles
    const classes = useStyles();
    // auth
    useEffect(() => {
        isMountedRef.current = true;
        firebase.auth().onAuthStateChanged(async user => {
            if(!user) props.history.push('/login')
            else {
                await firebase
                    .firestore()
                    .collection('chats')
                    .where('users', 'array-contains', user.email)
                    .onSnapshot(async response => {
                        if(isMountedRef.current){
                            const chats = response.docs.map(doc => doc.data())
                            await (setEmail(user.email), setChats(chats))
                        }
                    })
            }
        })
        return () => isMountedRef.current = false;
    })
    // state setters
    const newChatBtnClicked = () => {
        setNewChatFormVisible(true)
        setSelectedChat(null)
    }
    const selectChat = (chatIndex) => setSelectedChat(chatIndex)
    // sign out
    const signOut = () => firebase.auth().signOut();
    // sending message
    const buildDocKey = friend => [email, friend].sort().join(':');
    const submitMessage = msg => {
        const docKey = buildDocKey(chats[selectedChat].users.filter(user => user !== email)[0])
        firebase
            .firestore()
            .collection('chats')
            .doc(docKey)
            .update({
                messages: firebase.firestore.FieldValue.arrayUnion({
                    sender: email,
                    message: msg,
                    timestamp: Date.now()
                }),
                receiverHasRead: false
            })
    }

    return (
        <div>
            <ChatList history={props.history}
            newChatBtnFn={newChatBtnClicked}
            selectChatFn={selectChat}
            chats={chats}
            userEmail={email}
            selectedChatIndex={selectedChat} />
            {
                newChatFormVisible ?
                null :
                <ChatView user={email} chat={chats[selectedChat]}/>
            }
            {
                selectedChat !== null && !newChatFormVisible ?
                <ChatTextBox submitMessageFn={submitMessage}/> :
                null
            }
            <Button className={classes.signOutBtn} onClick={signOut}>Sign out</Button>
        </div>
    )
}

export default Dashboard
