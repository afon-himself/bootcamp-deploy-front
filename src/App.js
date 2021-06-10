import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);

  return (
    <div className="App">
      {users.map(user => (
        <div key={user._id}>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
