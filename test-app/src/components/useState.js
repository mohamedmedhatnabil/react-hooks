import { useState } from "react";
export default function TestUseState () {
    const [count, setCount] = useState(0);
    const [text,setText] = useState(true);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() =>{
                setCount(count + 1)
                setText(!text)
            }} >Click me</button>
            <p>{text && <h1>This is a text</h1>}</p>
        </div>
    )
}