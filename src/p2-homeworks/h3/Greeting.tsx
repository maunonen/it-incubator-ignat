import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    handleEnterPress: (e: KeyboardEvent<HTMLInputElement> ) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        error,
        totalUsers,
        handleEnterPress
    } // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : "" // need to fix with (?:)
    const onChange = ( e : ChangeEvent<HTMLInputElement> ) => {
        setNameCallback(e)
    }
    const onKeyPress = ( e : KeyboardEvent<HTMLInputElement>) => {
        handleEnterPress(e)
    }


    return (
        <div>
            <SuperInputText
                value={name}
                error={error}
                onChange={(e) => {
                    setNameCallback(e)
                }}
                onKeyPress={(e) => {handleEnterPress(e)}}
            />
            <SuperButton
                onClick={addUser}
            >
                Add
            </SuperButton>
            <span>{totalUsers}</span>
            {/*<input
                value={name}
                onChange={(e) => {
                    setNameCallback(e)
                }}
                className={inputClass}
                onKeyPress={(e) => {handleEnterPress(e)}}
            />
            <span>{error}</span>

            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>*/}
        </div>
    )
}

export default Greeting
