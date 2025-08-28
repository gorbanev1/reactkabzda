import React, {type Dispatch, type SetStateAction, useReducer, useState} from 'react';
import {reducer} from "./Reducer.ts";

type AccordionTitlePropsType ={
    title:string
    onClick: ()=>void
    open?: boolean


}
type AccordionPropsType ={
    title:string
    setOpen: Dispatch<SetStateAction<boolean>>;
    open?: boolean


}
type AccordionBodyPropsType ={

    setOpen: (o: boolean)=>void
    open: boolean

}

export const ControlledAccordion = ({title, setOpen, open}:AccordionPropsType) => {


    let [state, dispatch]=useReducer(reducer, {collapsed: true})

/*    const AccordionTitle = ({title, setOpen}:AccordionTitlePropsType)=>{
        return (
            <h3 onClick={()=>{
                setOpen(!open)
            }}>{title}</h3>
        )
    }    */
    const AccordionTitle = ({title, onClick}:AccordionTitlePropsType)=>{
        return (
            <h3 onClick={()=>{
                onClick()
            }}>{title}</h3>
        )
    }

    const AccordionBody = ({open, setOpen}:AccordionBodyPropsType)=>{

        return ( <>
                <ul>
                    {state.collapsed && <>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </>}
                </ul>
                <button onClick={()=>{
                    setOpen(!open)
                }}>toggle</button>
            </>
        )
    }

    return (
        <div>
            <AccordionTitle title={title} onClick={()=> {
                dispatch({type: "TOGGLE-COLLAPSED"})
            }}/>
            <AccordionBody open={open} setOpen={setOpen}/>


        </div>
    );
};

