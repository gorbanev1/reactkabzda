import type {HandlerFunction} from "storybook/actions";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType ={
    value?: any
    onChange: HandlerFunction
    items: ItemType[]
}

export function Select(props: SelectPropsType){
    return (
        <div className={s.select}>
            <h2>{props.value}</h2>
            {props.items.map(i=><div>{i.title}</div>)}
        </div>
    )
}