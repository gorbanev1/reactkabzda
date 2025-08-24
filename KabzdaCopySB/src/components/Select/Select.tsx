import type {HandlerFunction} from "storybook/actions";
import s from './Select.module.css'
import React, {useState, type KeyboardEvent, useEffect} from "react";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (v: any) => void
    items: ItemType[]
}

const items = [
    {title: "sdfsd", value: "1212"},
    {title: "sd1q11fsd", value: "12sdfsd12"},
    {title: "sdfssdfsdd", value: "12sdfs12"},
]

export function Select(props: SelectPropsType) {
    const [active, setActive] = React.useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);
    const toggleItems = () => {
        setActive(!active);

    }
    useEffect(() => {
        setHoveredElementValue(props.value);
    }, [props.value]);
    const selectedItem = props.items.find(item => item.value == props.value);
    const hoveredItem = props.items.find(item => item.value == hoveredElementValue);
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown"|| e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const newHoveredElement = e.key==='ArrowDown'?
                        items[i+1]
                        : items[i-1];

                        setHoveredElementValue(newHoveredElement.value);
                        props.onChange(newHoveredElement.value);
                        return;

                }
            }
            props.onChange(props.items[0].value);
        }
        if (e.key === "Enter"||e.key === "Escape") {
            toggleItems();
        }
    }
    return (
        <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.value}</span>
            {
                active &&
                <div className={s.items}>
                    {props.items.map(i => <div
                        onMouseEnter={() => setHoveredElementValue(i.value)}
                        className={s.item + " " + (hoveredItem === i ? s.selected : " ")}
                        onClick={() => {
                            props.onChange(i.value)
                            toggleItems()
                        }}
                    >{i.value}</div>)

                    }
                </div>
            }
        </div>
    )
}