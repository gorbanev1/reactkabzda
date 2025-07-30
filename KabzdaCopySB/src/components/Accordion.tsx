import React, {useState} from 'react';

type AccordionTitlePropsType = {
    title: string
    setOpen: (open: boolean) => void


}
type AccordionBodyPropsType = {
    open: boolean,
    setOpen: (open: boolean) => void
    items: ItemsType[]
}
type ItemsType ={
    value: string
    id: string
}

export const Accordion = ({title, setOpen, open, items}: AccordionTitlePropsType & AccordionBodyPropsType) => {

    const AccordionBody = ({open, setOpen, items }:AccordionBodyPropsType) => {

        return (<>
                <ul>
                    {open && items.map((i, index) => {
                        return <li key={index}>{i.value}</li>})
                    }
                </ul>
                <button onClick={() => {
                    setOpen(!open)
                }}>toggle
                </button>
            </>
        )
    }
    const AccordionTitle = ({title, setOpen}: AccordionTitlePropsType) => {
        return (
            <h3 onClick={() => {
                setOpen(!open)
            }}>{title}</h3>
        )
    }
    return (
        <div>
            <AccordionTitle title={title} setOpen={setOpen}/>
            <AccordionBody open={open} setOpen={setOpen} items={items}/>


        </div>
    );
};

