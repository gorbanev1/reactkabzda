import {Select} from "./Select.tsx";
import {action} from "storybook/actions";

export default {
    title: 'Select',
    component: Select
}
const items= [
    {title: "sdfsd", value: "1212"},
    {title: "sd1q11fsd", value: "12sdfsd12"},
    {title: "sdfssdfsdd", value: "12sdfs12"},
]



export const Select1 = ()=> <Select onChange={action("Value changed")}
                                    items={items}
                                    value={"хуект"}/>

export const Select2 = ()=> <Select onChange={action("Value changed")}
                                    items={items}
                                    />