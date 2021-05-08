import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: ( _id : number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    const classPriority =  () => {
        switch (props.affair.priority) {
            case "high":
                return s.high
            case "middle":
                return s.middle
            case "low":
                return s.low
            default:
                return ''
        }
    }

    return (
        <div className={`${s.affair}  ${classPriority()}`}>
            <div className={s.name}>{`Name ${ props.affair.name }.`}</div>
            <div className={s.priority}>{`Piority :  ${ props.affair.priority }`}</div>
            <div className={s.actions}>
                <SuperButton onClick={deleteCallback}>X</SuperButton>
            </div>

            {/*{`Name ${ props.affair.name }. Piority :  ${ props.affair.priority }` }*/}

            {/*<button onClick={deleteCallback}>X</button>*/}
        </div>
    )
}

export default Affair
