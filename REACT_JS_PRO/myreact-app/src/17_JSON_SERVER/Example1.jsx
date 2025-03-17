import React from 'react'

export default function Example1() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching users:", error));
    }, []);
  
    return (
      <div>
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} ({user.email})</li>
          ))}
        </ul>
      </div>
    );
}