import React, {useState} from 'react';

type AccordionTitlePropsType ={
    title:string

}

export const Accordion = ({title, setOpen, open}:AccordionTitlePropsType) => {

    const AccordionBody = ({open, setOpen})=>{

        return ( <>
                <ul>
                    {open && <>
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
    const AccordionTitle = ({title, setOpen}:AccordionTitlePropsType)=>{
        return (
            <h3 onClick={()=>{
                setOpen(!open)
            }}>{title}</h3>
        )
    }
    return (
        <div>
            <AccordionTitle title={title} setOpen={setOpen}/>
            <AccordionBody open={open} setOpen={setOpen}/>


        </div>
    );
};

