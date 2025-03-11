import React, { useMemo, useState } from 'react'

export default function Example2() 
{
    const users = [
        { id: 1, name: "Anjali" },
        { id: 2, name: "Bhavana" },
        { id: 3, name: "Chandani" },
        { id: 4, name: "Dhruv" },
    ];

    const [search, setSearch] = useState("");

    const filteredUsers = useMemo(() => {
        console.log("Filtering users...");
        
        return users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]); // Recalculates only when "search" changes


    return (
        <div>
            <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
            {filteredUsers.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
            </ul>
        </div>
    );
    
}