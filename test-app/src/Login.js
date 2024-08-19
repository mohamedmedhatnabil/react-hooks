import {useContext} from 'react'
import { ContextApp } from './useContext';
export default function Login() {
const {setUserName} = useContext(ContextApp);
    return (
        <div>
            <input onChange={(event) => {
               setUserName(event.target.value) ;
            }}></input>
        </div>
    )
}