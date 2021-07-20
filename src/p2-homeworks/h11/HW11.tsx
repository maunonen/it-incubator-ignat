import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from './HW11.module.css';

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeRange = ( valueArr : number[]) : void => {
        if (valueArr && Array.isArray(valueArr) && valueArr.length > 0){
            setValue1(valueArr[0])
            setValue2(valueArr[1])
        }

    }

    return (
        <div className={s.center} >
            <hr/>
            <h2>homeworks 11</h2>
            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                    min={1}
                    max={100}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={s.doubleSliderBlock}>
                <span className={s.doubleSliderLeftCaption}>{value1}</span>
                <SuperDoubleRange
                    min={1}
                    max={100}
                    disabled={false}
                    onChangeRange={ onChangeRange }
                    value={[value1, value2]}
                    step={10}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span className={s.doubleSliderRightCaption}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
