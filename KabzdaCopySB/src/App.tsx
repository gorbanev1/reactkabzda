import {useState} from 'react'
import './App.css'
import {Accordion} from "./components/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating";
import {OnOff} from "./components/OnOff";
import {v1} from 'uuid'
import {Select} from "./components/Select/Select.tsx";
import {SelectWrapper} from "./components/Select/Select.stories.tsx";
import {ControlledRating} from "./components/ControlledRating.tsx";
import {ControlledAccordion} from "./components/ControlledAccordion/ControlledAccordion.tsx";


function App() {
    const [count, setCount] = useState(0)
    const [open, setOpen]=useState<boolean>(false)
    const [openAccordion, setAaccordionOpen] =useState<boolean>(false)
    const [on, setOn] =useState<boolean>(false)

    const items = [{value: 'asas', id:v1()}, {value: 'asas', id:v1()}, {value: 'asas', id:v1()}]

    const filter = (arr:any, callback:any)=>{
        const result=[]
        for(let i=0; i<arr.length; i++){
            if (callback(arr[i])) result.push(arr[i])
        }
        return result
    }

    let [value, setValue]=useState<1|2|3|4|5>(1)
    const items1= [
        {title: "sdfsd", value: "1212"},
        {title: "sd1q11fsd", value: "12sdfsd12"},
        {title: "sdfssdfsdd", value: "12sdfs12"},
    ]
    return (
        <>
            {/*<SelectWrapper />*/}
            <ControlledAccordion title={"sfsdfsd"} open={open} setOpen={setOpen} items={items}/>
{/*            <UncontrolledRating/>


            <OnOff setOn={setOn} on={on}/>
            <ControlledRating value={value} setValue={setValue}/>*/}
        </>
    )
}

export default App
