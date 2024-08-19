import {useEffect, useLayoutEffect, useRef} from 'react'
/*the useEffect is shown after everything in our page is rendered and showen to the user 
and the useLayoutEffect is called before all this stuff going on so it's better to use it 
when we load an api call which can take some time so our website don't work probably
*/

export default function TestUseLayoutEffect () {
    const inputRef = useRef(null);
    useLayoutEffect(() => {
        //it will call the value before the useEffect change the value
        console.log(inputRef.current.value);
    }, [])
   useEffect( () => {
    inputRef.current.value = 'Hello';
    }, [])
    return (
        <div>
            <input ref={inputRef} value={"Mohamed"} style={{width:400, height:200, backgroundColor:'red'}}/>
        </div>
    )
}