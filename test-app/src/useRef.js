import {useRef} from 'react'
/*it's used when we want to write vanilla javascript (without any frameworks plain javascript code)
useRef is used to access the dom
*/
export default function TestUseRef () {
const inputRef = useRef(null); 
     const onCLick = () => {
        inputRef.current.value = '';
        //console.log(inputRef.current.value);
    }
    return (
        <div>
            <h1>Hi, Mohamed</h1>
            <input type="text" placeholder='Name' ref={inputRef}/>
            <button onClick={onCLick}>Change Name</button>
        </div>
    )
}