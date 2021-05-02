import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import { v4 as uuid } from 'uuid';

console.log(uuid());

// types
export type UserType = {
    _id: string //any need to fix any
    name:  string //any need to fix any
}

// уровень работы с глобальными данными
function HW3() {

    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any
    console.log(users);
    const addUserCallback = (name: string) => { // need to fix any
        setUsers([...users, { _id : uuid(), name }]) // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer
                users={users}
                addUserCallback={addUserCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
