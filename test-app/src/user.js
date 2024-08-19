import { useContext } from "react"
import {ContextApp} from './useContext'
export default function User() {
    const {userName} =useContext(ContextApp)
    return(
        <h1>User: {userName}</h1>
    )
            
}