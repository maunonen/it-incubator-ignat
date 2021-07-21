import React, {useState} from "react";
import {makeStyles, Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min?: number
    max?: number
    step ? : number
    disabled?: boolean
}

function valuetext(value: number) {
    return `${value}°C`;
}

const useStyles = makeStyles({
    root: {
        width: "300px"
    },
});

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value,
        step,
        min,
        max,
        disabled, ...restProps
    }
) => {
    const classes = useStyles()

    // сделать самому, можно подключать библиотеки
    const [sliderValue, setSliderValue] = useState<number[]>([min || 0, max || 100]);
    const handleChange = (event: any, newValue: number | number[]) => {
        //console.log('Handle change', newValue )
        if (newValue && Array.isArray(newValue) && newValue.length > 0) {
            const leftValueInRange: number = newValue[0]
            const rightValueInRange: number = newValue[1]
            onChangeRange && onChangeRange([leftValueInRange, rightValueInRange])
        }
        setSliderValue(newValue as number[]);
    };

    return (
        <div className={classes.root}>
            <Slider
                min={min}
                max={max}
                disabled={disabled}
                step={step}
                value={value }
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}

export default SuperDoubleRange;
