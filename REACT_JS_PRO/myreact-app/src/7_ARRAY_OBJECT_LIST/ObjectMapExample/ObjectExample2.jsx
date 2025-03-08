import React, { useState } from 'react'

export default function ObjectExample2() {

    const [user, setUser] = useState({
            name: 'Anjali Patel',
            occupation: 'Developer',
        });

    const updateName = () => {
    setUser({ ...user, name: 'Enji Patel' });  // Ensures immutability
    };
    
    return (
    <div>
        <h1>{user.name}</h1>
        <p>Occupation: {user.occupation}</p>
        <button onClick={updateName}>Change Name</button>
    </div>
    );
}