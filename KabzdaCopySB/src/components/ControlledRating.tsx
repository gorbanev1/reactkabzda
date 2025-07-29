// @flow
import * as React from 'react';
import {useState} from "react";

type ControlledRating = {
    value: 1|2|3|4|5
    setValue:(value: 1|2|3|4|5 )=>void
};
type Star={
    selected: boolean
    setValue: (value: 1|2|3|4|5 )=>void
    v: 1|2|3|4|5
}

export function Star(props: Star){
    const clickHandler=()=>{
        props.setValue(props.v)
    }
    return <span onClick={clickHandler}>
        {props.selected? <b>{"star "} </b>:"star " }
    </span>


}
export const ControlledRating = (props: ControlledRating) => {

    return (
        <div>
            <div>{'rating: '}</div>
            <Star selected={props.value>=1} setValue={props.setValue} v={1}></Star>
            <Star selected={props.value>=2} setValue={props.setValue} v={2}></Star>
            <Star selected={props.value>=3} setValue={props.setValue} v={3}></Star>
            <Star selected={props.value>=4} setValue={props.setValue} v={4}></Star>
            <Star selected={props.value>=5} setValue={props.setValue} v={5}></Star>


        </div>
    );
};
