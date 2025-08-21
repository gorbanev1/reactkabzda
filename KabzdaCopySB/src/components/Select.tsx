import type {HandlerFunction} from "storybook/actions";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType ={
    value: any
    onChange: HandlerFunction
    items: ItemType[]
}

export function Select(props: SelectPropsType){
    return (
        <div>
            <div>{props.value}</div>
            {props.items.map(i=><div>{i.title}</div>)}
        </div>
    )
}