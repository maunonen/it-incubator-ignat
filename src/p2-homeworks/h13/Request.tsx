import React, {useState} from "react";
import s from "./HW13.module.css";
import {Button} from "@material-ui/core";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./RequestAPI";

export type ServerResponseType = {
    data: {
        errorText: string
        info: string
        yourBody: {
            success: boolean
        }
    }
}

function Request() {
    const [success, setSuccess] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    console.log(success)

    const sendRequest = () => {
        requestAPI.postRequest(success)
            .then((res) => {
                if (res.data.errorText) {
                    setMessage(res.data.errorText)
                }
            })
            .catch((error) => {
                if (error.response) {
                    setMessage(error.response.data?.errorText || '')
                }
            })

    }
    const handleSuccess = ( checked : boolean) => {
        setSuccess(checked)
    }


    return (
        <div className={ s.center}>
            <p>Request</p>
            { message ? <div>{message}</div> : <br/>}
            <SuperButton onClick={sendRequest}>Send Request</SuperButton>
            <SuperCheckbox onChangeChecked={handleSuccess}>
                Success
            </SuperCheckbox>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default Request;
