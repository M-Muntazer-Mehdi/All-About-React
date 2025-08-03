import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const fetchUsers = async (page) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`);
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
};

export default function UserReactQuery() {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['users', page],
    queryFn: () => fetchUsers(page),
    staleTime: 30000, // Data stays fresh for 30s
    refetchOnWindowFocus: true, // Refetch on focus
  });

  // Prefetch next page for better UX
  const prefetchNextPage = () => {
    queryClient.prefetchQuery({
      queryKey: ['users', page + 1],
      queryFn: () => fetchUsers(page + 1),
    });
  };

  return (
    <div>
      <h1>React Query Working:</h1>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button
        onClick={() => setPage(page + 1)}
        disabled={!data || data.length < 5}
        onMouseEnter={prefetchNextPage}
      >
        Next
      </button>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <p>Page: {page}</p>
      <p>Total Users: {data?.length || 0}</p>
      <p>Last Fetched: {new Date().toLocaleTimeString()}</p>
      <p>Auto Refetch every 30 seconds (staleTime)</p>
      <p>Refetch on window focus enabled</p>
      <p>React Query handles cache + background updates</p>
    <p>Data fetched from: https://jsonplaceholder.typicode.com/users</p>
    <p>Note: This example demonstrates how to use React Query for data fetching, with automatic refetching and handling of loading and error states.</p>
    <p>Click the buttons to navigate through pages of users.</p>
    <p>Hover over the "Next" button to prefetch the next page of users.</p>
    <p>React Query provides a powerful and efficient way to manage server state in React applications.</p>
    <p>It simplifies data fetching, caching, and synchronization with the server.</p>
    </div>
  );
}
