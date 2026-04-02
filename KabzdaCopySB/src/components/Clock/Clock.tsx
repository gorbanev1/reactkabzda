import React, {useEffect, useState} from 'react'
import {DigitalClockView} from "./DigitalClockView.tsx";
import {AnalogClockView, type PropsType} from "./AnalogClockView.tsx";

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('TICK')
            setDate(new Date())
        }, 1000)

        return () => {
            // clearInterval(intervalID)
        }
    }, [])
    let view
    switch (props.mode) {
        case 'analog':
            view=<AnalogClockView date={date}></AnalogClockView>
            break
        case 'digital':
        default:
           view= <DigitalClockView date={date}></DigitalClockView>

    }
    return <div>
        {view}

    </div>
}


