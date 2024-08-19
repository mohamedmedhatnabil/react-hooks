import {useState} from 'react'
import Login from './Login';
import User from './user'
export default function TestUseContext () {
 const [userName, setUserName] = useState('');
    return (
        <div>
            <Login setUserName={setUserName} />
            <User userName = {userName} />
        </div>
    )
}