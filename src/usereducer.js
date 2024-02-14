import { React,useReducer } from "react";

const initialStat={count:0}

const add=()=>{
    return(
        {type:"add"}
    )
}

const del=()=>{
    return(
        {type:"del"}
    )
}

const edit=()=>{
    return {type:"edit"}
}

const reduce=(action,state)=>{
    switch(action.type){
        case 'add':
            return {count:state.count+1}
        case 'del':
            return {count:state.count-1}
        case 'edit':
            return {count:state.count-10}
    }
}
export function Todox(){
    const[stat,dispatch]=useReducer(reduce,initialStat)
    return(
        <>
            Total Lists:{stat.list}
            <button onClick={dispatch(add())}>Add</button>
            <button onClick={dispatch(del())}>Del</button>
        

        </>
    )
}



const initialState={
    count:0
}

const reducer=(state,action)=>{
    switch(action.type){
        case "inc":
            return{
                count:state.count+1
            }
        case "dec":
            return{
                count:state.count-1
            }
    }
}
const increment=()=>{
    return(
        {type:"inc"}
    )
}
const decrement=()=>{
    return(
        {type:"dec"}
    )
}

export function Counter(){

    const[state,dispatch]=useReducer(reducer,initialState)

    return(
        <>
            Count:{state.count}
            <button onClick={()=>{dispatch(increment())}}>+</button>
            <button onClick={()=>{dispatch(decrement())}}>-</button>
        </>
    )
}