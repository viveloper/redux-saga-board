import React from 'react';

function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post, index) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
