import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: ( name : string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e:  ChangeEvent<HTMLInputElement> ) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        //e.preventDefault();
    }
    const addUser = () => {
        const validName = name.trim();
        if (!validName) {
            setError("Invalid name");
        } else {
            setError("");
            addUserCallback(validName);
            setName('');
        }
    }

    const totalUsers = users.length || 0 // need to fix

    const handleEnterPress = (e : KeyboardEvent<HTMLInputElement> ) => {
        if ( e.key === "Enter") {
            addUser()
        }
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            handleEnterPress={handleEnterPress}
        />
    )
}

export default GreetingContainer
