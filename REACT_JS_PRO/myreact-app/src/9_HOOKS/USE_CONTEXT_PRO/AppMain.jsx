import React from 'react'
import ChildContext_Example1 from './ChildContext_Example1';
import UserContext from './UserContext';
import ChildContext_Example2 from './ChildContext_Example2';

export default function AppMain() {
    const user = {name : "Anjali Patel",subject : "React Js"};

  return (
        <div>
            
                <UserContext.Provider value={user}>
                    <ChildContext_Example1/>
                    <ChildContext_Example2/>
                </UserContext.Provider>
        </div>
  )
}
