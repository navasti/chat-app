import React, {useState, useEffect} from 'react'
import ChatList from './ChatList'
import firebase from 'firebase'

const Dashboard = (props) => {
    const [selectedChat, setSelectedChat] = useState(null)
    const [email, setEmail] = useState(null)
    const [newChatFormVisible, setNewChatFormVisible] = useState(false)
    const [chats, setChats] = useState([])

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async _user => {
            if(!_user) props.history.push('/login')
            else {
                await firebase
                    .firestore()
                    .collection('chats')
                    .where('users', 'array-contains', _user.email)
                    .onSnapshot(async response => {
                        const chats = response.docs.map(_doc => _doc.data())
                        await (setEmail(_user.email), setChats(chats))
                        
                    })
            }
        })
    })

    const newChatBtnClicked = () => {
        setNewChatFormVisible(true)
        setSelectedChat(null)
    }

    const selectChat = (chatIndex) => {
        console.log('selected chat: ', chatIndex)
    }

    return (
        <div>
            <ChatList 
                history={props.history}
                newChatBtnFn={newChatBtnClicked}
                selectChatFn={selectChat}
                chats={chats}
                userEmail={email}
                selectedChatIndex={selectedChat}
                newChatFormVisible={newChatFormVisible}
            />
        </div>
    )
}

export default Dashboard
