import React from "react";
import UsersUseEffect from './useeffectFetch';
import ReactQueryExample from './reactQuery';

const codeStyle = {
  background: '#fff',
  border: '1px solid #e0e7f0',
  borderRadius: '8px',
  boxShadow: '0 2px 20px #22334414',
  padding: '13px 18px',
  margin: '0 0 16px 0',
  fontFamily: 'Fira Mono, Consolas, monospace',
  fontSize: '0.99rem',
  color: '#1976d2',
  overflowX: 'auto',
  whiteSpace: 'pre',
};
const cardStyle = {
  flex: 1,
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 2px 14px #0b223933',
  padding: '25px 18px 25px 18px',
  margin: 0,
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column'
};
const titleStyle = { color: '#1976d2', fontSize: '1.23rem', fontWeight: 700, margin: '0 0 15px 0' };
const explainStyle = { color: '#31465a', fontSize: '1.01rem', margin: '7px 0 19px 0' };

function getCodeBlock(type) {
  if (type === 'reactQuery') return `import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
const fetchUsers = async (page) => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/users?_page=\${page}&_limit=5\`);
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
};
export default function UserReactQuery() {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ['users', page],
    queryFn: () => fetchUsers(page),
    staleTime: 30000,
    refetchOnWindowFocus: true,
  });
  // Prefetch next page for better UX
  const prefetchNextPage = () => {
    queryClient.prefetchQuery({
      queryKey: ['users', page+1],
      queryFn: () => fetchUsers(page+1),
    });
  };
  return (
    <div> ... </div>
  );
}`;
  if (type === 'useEffect') return `import { useState, useEffect } from 'react';
export default function UsersUseEffect() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/users?_page=\${page}&_limit=5\`);
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
    const interval = setInterval(fetchUsers, 30000);
    const handleFocus = () => fetchUsers();
    window.addEventListener('focus', handleFocus);
    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', handleFocus);
    };
  }, [page]);
  return (
    <div> ... </div>
  );
}`;
  return '';
}

const infoBox = {
  background: '#eef4fb',
  borderLeft: '5px solid #1976d2',
  padding: '10px 17px',
  borderRadius: '7px',
  margin: '14px 0 18px 0',
  fontSize: '1.09rem',
  color: '#144170',
};
const tipStyle = {
  background: '#e4f0fd',
  borderLeft: '5px solid #90caf9',
  padding: '8px 14px',
  borderRadius: '6px',
  fontSize: '0.99rem',
  fontStyle: 'italic',
  margin: '10px 0 18px 0',
  color: '#1750a6',
};

export default function MainFile() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 20 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>React Query vs useEffect + Fetch</h1>
        <div style={{color:'#214570',fontSize:'1.16rem', marginTop:10}}>
          Compare two approaches to data fetching in React: the modern, powerful <b>React Query</b> and the traditional <b>useEffect + fetch</b> pattern.
        </div>
        <div style={infoBox}>
          <b>Why React Query?</b><br/>
          React Query handles caching, background refetching, stale data management, loading/error states, and more—all out of the box. With useEffect, you must manage all of this yourself.
        </div>
      </header>

      <section style={{marginBottom: 30}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.3rem', marginBottom: 12 }}>Side-by-Side Comparison</h2>
        <p style={{fontSize: '1.05rem', color: '#2c4258', marginBottom: 14}}>
          Both examples fetch a paginated list of users from an API. Notice how React Query simplifies state, caching, and refetch logic, while the useEffect version requires manual setup for the same features.
        </p>
        <div style={tipStyle}>
          <b>Tip:</b> Try switching pages in both demos and observe the differences in behavior. React Query prefetches the next page on hover for instant navigation!
        </div>
      </section>

      <div
        style={{
          display: "flex",
          gap: "32px",
          padding: "0",
          backgroundColor: "transparent",
          minHeight: 590,
          alignItems: "flex-start"
        }}
      >
        {/* React Query Section */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>React Query Version</h2>
          <div style={explainStyle}>Automatic caching, refetch, fetching status, and window focus/refetch are all managed with <b>React Query</b>.</div>
          <div style={codeStyle}>{getCodeBlock('reactQuery')}</div>
          <ReactQueryExample />
        </div>
        {/* useEffect Section */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>useEffect + Fetch Version</h2>
          <div style={explainStyle}>Classic approach: <b>useEffect</b> for fetching, manual refetch logic, and loading/error management.</div>
          <div style={codeStyle}>{getCodeBlock('useEffect')}</div>
          <UsersUseEffect />
        </div>
      </div>

      <section style={{marginTop: 36, paddingTop: 20, borderTop: '2px solid #e5ecf5'}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Key Differences</h2>
        <ul style={{fontSize: '1.05rem', color: '#2c4258', margin: '0 0 0 20px'}}>
          <li><b>Caching:</b> React Query caches data automatically and reuses it across renders. useEffect refetches every time.</li>
          <li><b>Loading states:</b> React Query provides <code>isLoading</code>, <code>isFetching</code>, <code>isError</code> out of the box.</li>
          <li><b>Refetching:</b> React Query handles refetch on window focus, intervals, and mutations automatically.</li>
          <li><b>Prefetching:</b> React Query can prefetch data before it's needed (hover over "Next" button to see!).</li>
          <li><b>Code brevity:</b> React Query eliminates boilerplate for state, effects, and cleanup.</li>
        </ul>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>When to Use Each</h2>
        <div style={infoBox}>
          <b>Use React Query when:</b> You're fetching server data, need caching, automatic background updates, or pagination/infinite scroll.<br/><br/>
          <b>Use useEffect when:</b> You have simple, one-time data needs, or when integrating with non-server async logic (timers, WebSockets, etc.).
        </div>
      </section>
    </div>
  );
}
