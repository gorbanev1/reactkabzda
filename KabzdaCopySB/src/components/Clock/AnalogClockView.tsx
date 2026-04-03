import React from 'react';
import type {ClockViewPropsType} from "./DigitalClockView.tsx";
import s from './AnalogClockView.module.css'

export const  AnalogClockView: React.FC <ClockViewPropsType> =({date} )=> {



        const secondsStyle = {
            transform: `rotate(${date.getSeconds() * 6}deg)`
        }
        const minutesStyle = {
            transform: `rotate(${date.getMinutes() * 6}deg)`
        }
        const hoursStyle = {
            transform: `rotate(${(date.getHours() % 12) * 30 + date.getMinutes() * 0.5}deg)`
        }

        return (
            <div className={s.clock}>
                <h3>CLOCK</h3>
                <div className={s["analog-clock"]}>
                    <div className={`${s.dial} ${s.seconds}`} style={secondsStyle} />
                    <div className={`${s.dial} ${s.minutes}`} style={minutesStyle} />
                    <div className={`${s.dial} ${s.hours}`} style={hoursStyle} />
                </div>

            </div>
        )
    }
