import { useReducer } from "react";
export default function TestUseReducer () {
    /*useReducer will triger couple actions
    if it's more than one action that u're trying to change there u're trying to
     use the useReducer hook so you don't have to actually have
     many differnet states and change them individually like useState 
      state to have the state of my object and teh dispatch function
      to triger any events and change the state */
     const [state, dispatch] = useReducer(reducer, {count:0, text:true});
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() =>{
                dispatch({type:'increment'});
                dispatch({type:'toggleText'});
            }} >Click me</button>
            <p>{state.text && <h1>This is a text</h1>}</p>
        </div>
    )
}
function reducer (state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1, text: state.text}
        case 'toggleText':
            return {count: state.count, text: !state.text}
        default:
            return state
    }
}