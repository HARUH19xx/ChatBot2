import React from 'react'
import { Chat } from './index';
import '../assets/styles/style.css'

const Chats = (props) => {
    return (
        <div className="chats" id="scroll-area">
            {props.chats.map((chat, index) => (
                <Chat text={chat.text} type={chat.type} key={index.toString()} />
            ))}
        </div>
    );
}

export default Chats;
