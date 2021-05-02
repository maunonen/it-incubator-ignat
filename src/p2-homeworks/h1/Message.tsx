import React from 'react'
import {MessageType} from "./HW1";
import classes from './Message.module.css'

function Message( props : MessageType ) {
    console.log(props)
    return (
        <div className={classes.messageComponent}>
            <div className={classes.avatar}>
                <img src={props.avatar}/>
            </div>

            <div className={classes.messageBox}>
                <div className={classes.messageContent}>
                    <div className={classes.messageName}>
                        {props.name}
                    </div>
                    <div className={classes.messageText}>
                        {props.message}
                    </div>
                </div>
                <div className={classes.messageTime}>
                    {props.time}
                </div>
            </div>

        </div>
    )
}

export default Message
