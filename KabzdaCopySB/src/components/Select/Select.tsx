import type {HandlerFunction} from "storybook/actions";
import s from './Select.module.css'
import React from "react";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (v: any) => void
    items: ItemType[]
}

const items= [
    {title: "sdfsd", value: "1212"},
    {title: "sd1q11fsd", value: "12sdfsd12"},
    {title: "sdfssdfsdd", value: "12sdfs12"},
]

export function Select(props: SelectPropsType) {
    const [active, setActive] = React.useState(false);
    const toggleItems = ()=>{
        setActive(!active);

    }
    return (
        <div className={s.select}>
            <span className={s.main} onClick={toggleItems}>{props.value} czx</span>
            {
                active&&
                <div className={s.items}>
                {props.items.map(i => <div
                onClick={()=>props.onChange(i.value)}
                >{i.title}</div>)

                }
            </div>
            }
        </div>
    )
}