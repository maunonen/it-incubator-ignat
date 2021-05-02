import React from 'react'
import Message from "./Message";
import classes from "./Message.module.css";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'Lorem ipsum',
    /*message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
        'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n' +
        'numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n' +
        'optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n' +
        'obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\n' +
        'nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,',*/
    time: '22:00',
}
const messageData1 = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    //message: 'Lorem ipsum',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
        'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n' +
        'numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n' +
        'optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n' +
        'obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\n' +
        'nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,',
    time: '22:00',
}

export  type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <div>
                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />
                <Message
                    avatar={messageData1.avatar}
                    name={messageData1.name}
                    message={messageData1.message}
                    time={messageData1.time}
                />
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
