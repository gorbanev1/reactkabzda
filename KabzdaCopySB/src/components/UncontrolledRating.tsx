// @flow
import * as React from 'react';
import {useState} from "react";

type Props = {

};
type Star={
    selected: boolean
    setValue: ( )=>void
    v: 1|2|3|4|5
}

export function Star(props: Star){
    const clickHandler=(value)=>{
        props.setValue()
    }
    return <span onClick={clickHandler}>
        {props.selected? <b>{"star "} </b>:"star " }
    </span>


}
export const UncontrolledRating = (props: Props) => {
    let [value, setValue]=useState(1)
    return (
        <div>
            <div>{'rating: '}</div>
            <Star selected={value>=1} setValue={()=>setValue(1)} ></Star>
            <Star selected={value>=2} setValue={()=>setValue(2)} ></Star>
            <Star selected={value>=3} setValue={()=>setValue(3)} ></Star>
            <Star selected={value>=4} setValue={()=>setValue(4)} ></Star>
            <Star selected={value>=5} setValue={()=>setValue(5)} ></Star>


        </div>
    );
};
