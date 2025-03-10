import React, { useContext } from 'react'
import UserContext from './UserContext'

export default function ChildContext_Example1() {
    
    const user = useContext(UserContext);

    return (
        <div>ChildContext_Example1

            <h1>Name : {user.name}</h1>
            
        </div>
        
    )
}
