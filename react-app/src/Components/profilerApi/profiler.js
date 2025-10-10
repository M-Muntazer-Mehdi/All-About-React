// File: App.js
import React, { useState, useEffect, Profiler } from "react";

// Simulate backend fetch
function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [];
      for (let i = 1; i <= 1000; i++) {
        users.push({ id: i, name: `User ${i}` });
      }
      resolve(users);
    }, 1000); // simulate 1s network delay
  });
}

// Component rendering a list of users
function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  // Profiler callback
  const onRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    console.log(`Profiler [${id}] - ${phase}`);
    alert(`Profiler [${id}] - ${phase}`);
    console.log(`Actual duration: ${actualDuration}ms`);
    alert(`Actual duration: ${actualDuration}ms`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Profiler Example</h1>
      <p>Check console for render timings of the UserList component.</p>

      <Profiler id="UserList" onRender={onRenderCallback}>
        <UserList users={users} />
      </Profiler>
    </div>
  );
}
