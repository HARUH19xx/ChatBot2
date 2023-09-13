import React from 'react'
import person from '../assets/images/nigaoe_platon.png'
import NoProfile from '../assets/images/NoProfile.png'
import '../assets/styles/style.css'

const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

    return (
        <div className={classes}>
            <div className="p-chat__avatar">
                <img src={isQuestion ? person : NoProfile} alt="icon" />
            </div>
            <div className="p-chat__bubble">
                {props.text}
            </div>
        </div>
    )
}

export default Chat;
