import { expect, test } from 'vitest'
import {reducer, type StateType, TOGGLE_COLLAPSED} from "./Reducer.ts";

test('reducer should change value to true',()=>{
    const state: StateType ={
        collapsed: false
    }
    const newState= reducer(state, {type: TOGGLE_COLLAPSED})
    expect(newState.collapsed).toBe(true)
})
test('reducer should trow misstake',()=>{
    const state: StateType ={
        collapsed: true
    }
    const newState= reducer(state, {type: TOGGLE_COLLAPSED})
    expect(()=>{
        reducer(state, {type: "TOGLE-COLLAPSED"})
    }).toThrowError()
})