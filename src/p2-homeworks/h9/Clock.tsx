import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import moment, {Moment} from "moment";
import s from './HW9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Moment>(moment())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        if (timerId) {
            clearInterval(timerId)
        }
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(moment())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true);
    }
    const onMouseLeave = () => {
        setShow(false);
    }

    /*const stringTime = `${date.getHours()} ${date.getMinutes()} ${date.getSeconds()}`;*/
    /*const stringDate = `${date.getDay()} ${date.getMonth()} ${date.getFullYear()}`;*/

    const stringTime = date.format("HH:mm:ss")
    const stringDate = date.format("DD-MM-YYYY")

    return (
        <div className={s.clockBlock}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>
            {
                show ?
                    (<div>
                        {stringDate}
                    </div>) :
                    <br/>
            }
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>
        </div>
    )
}

export default Clock
