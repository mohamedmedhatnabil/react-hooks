import { useState, useImperativeHandle, forwardRef  } from "react";

    const Button = forwardRef((props, ref) => {
        const [toggle, setToggle] = useState(false);
        useImperativeHandle(ref, () => ({
            alterToggle () { setToggle(!toggle)}
        }));
    
    return (
        <div>
            <button>Button From Child</button>
            {toggle && <span>toogle</span>}
        </div>
    )
})
export default Button;
