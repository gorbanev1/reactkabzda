// @flow
import * as React from 'react';

type Props = {
    setOn: (on: boolean) => void
    on: boolean
};
export const OnOff = (props: Props) => {
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid red",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white",
        display: "inline-block"
    }
    const offStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        border: "1px solid red",
        padding: "2px",
        backgroundColor: props.on ? "white" : "green"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    }
    return (<>
            <div style={onStyle} onClick={() => props.setOn(true)}></div>
            <div style={offStyle} onClick={() => props.setOn(false)}></div>
            <div style={indicatorStyle}></div>
        </>
    )
}