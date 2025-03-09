// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch(' https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Use the useQuery hook to fetch data
  const { data, isLoading, isError, error, refetch } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5, // Cache for 5 minutes
    staleTime: 1000 * 60 * 1, // Data is considered fresh for 1 minute
    refetchOnWindowFocus: false, // Don't refetch when the window regains focus
    keepPreviousData: true, // Keep previous data while loading new data
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Data</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;