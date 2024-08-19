import {useState, createContext} from 'react'
import Login from './Login';
import User from './user';
export const ContextApp = createContext(null);
export default function TestUseContext () {
    /*i use the context to manage a collection of states or a collection of informations you want to access
    which i can have access to all states inside the components */
 const [userName, setUserName] = useState('');
    return (
        <ContextApp.Provider value={{userName, setUserName}}>
            <Login />
            <User />
        </ContextApp.Provider>
    )
}