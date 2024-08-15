import {useRef} from 'react'
import Button from './button'
/*it's allows us to define functions based on a ref that can be called using that ref  */
export default function TestUseImperativeHandle () {
    const buttonRef = useRef(null);
    return (
        <div>
            <button onClick={() => buttonRef.current.alterToggle()}>Button From Parent</button>
            <Button ref={buttonRef}/>
        </div>
    )
}