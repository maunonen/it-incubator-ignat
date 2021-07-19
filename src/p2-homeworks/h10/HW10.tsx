import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "../h9/HW9.module.css";
import {AppStoreType} from "./bll/store";
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import preloader from './30.gif';

function HW10() {
    const loading = useSelector( (state : AppStoreType) => (state.loading.isLoading))
    const dispatch =  useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)
        console.log("loading...");
    };

    return (
        <div className={s.center}>
            <hr/>
            <h2>homeworks 10</h2>
            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <img src={preloader} alt="loading..." />
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
