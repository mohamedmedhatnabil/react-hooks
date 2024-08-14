import { useEffect, useState } from "react";
import axios from 'axios';
/*
the function inside useEffect is called when i render the page it's called every time a state is changed
1) useEffect hook is used for handling things outside the scope of React, like manually manipulating the DOM , make an API call, access to localStorage, etc. 
2) useEffect hook is also used to keep different states in sync.

 */
export default function TestUseEffect () {
    const [data, setData] = useState('');
    const [count, setCount] = useState(0);
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
            setData(response.data[0].email);
            console.log('done')
        })
    /*we use the empty array so we can call the useEffect once
    if i pass the count state to the array it will call the useEffect every time the count state changes
    if i don't use the array it will suggest that any state changes in my component the useEffect should work*/
}, [])
return (
    <div>
        <h1>Hello {data}</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
 
)
}