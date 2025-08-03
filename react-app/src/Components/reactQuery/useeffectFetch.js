import { useState, useEffect } from 'react';

export default function UsersUseEffect() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`);
      if (!res.ok) throw new Error('Failed to fetch users');
      const result = await res.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();

    const interval = setInterval(fetchUsers, 30000); // background refetch every 30s
    const handleFocus = () => fetchUsers(); // refetch on window focus
    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', handleFocus);
    };
  }, [page]);

  return (
    <div>
      <h1>UseEffect +  Fetch Working:</h1>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button> 
      <button onClick={() => setPage(page + 1)} disabled={data.length < 5}>
        Next  
      </button>
      {loading && <p>Loading...</p>}  
      {error && <p>Error: {error.message}</p>}
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))} 
      </ul>
      <p>Page: {page}</p>
      <p>Total Users: {data.length}</p>
      <p>Last Fetched: {new Date().toLocaleTimeString()}</p>
      <p>Refetch every 30 seconds</p>
      <p>Refetch on window focus</p>
      <p>UseEffect with Fetch Example</p>
      <p>Data fetched from: https://jsonplaceholder.typicode.com/users</p>
      <p>Note: This example demonstrates how to use useEffect for data fetching, with automatic refetching and handling of loading and error states.</p>
      <p>Click the buttons to navigate through pages of users.</p>
      <p>Data is fetched in chunks of 5 users per page.</p>
      <p>Use the browser's back and forward buttons to navigate through the pages.</p>
      <p>Data is fetched from a mock API and displayed in a list.</p>
    </div>
  );
}
