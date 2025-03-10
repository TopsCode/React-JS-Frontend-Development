import React, { useContext } from 'react'
import UserContext from './UserContext'

export default function ChildContext_Example2() {
    const user = useContext(UserContext);

    return (
        <div>
            ChildContext_Example2

            <h1>Subject : {user.subject}</h1>

        </div>
    )
}
