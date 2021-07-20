import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeAC, ThemeNameType} from "./bll/themeReducer";

const themes : Array<ThemeNameType> = ['dark', 'red','green', 'some'] ;

function HW12() {
    //const theme = 'some'; // useSelector
    const theme = useSelector((state: AppStoreType) => state.theme.theme)
    // useDispatch, onChangeCallback
    console.log('Theme', theme)
    const dispatch = useDispatch()
    const onChangeCallback = ( option : ThemeNameType) => {
        dispatch(changeThemeAC(option))
    }

    return (
        <div className={s[theme] + ' ' + s.center}>
            <hr/>
            <span className={s[theme + '-text']}>
                <h2>homeworks 12</h2>
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect
                options={themes}
                onChangeOption={onChangeCallback}
            />
            <hr/>
        </div>
    );
}

export default HW12;
