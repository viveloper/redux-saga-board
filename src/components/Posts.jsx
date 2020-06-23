import React from 'react';
import { goToPost } from '../modules/posts';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Posts({ posts }) {
  const dispatch = useDispatch();
  const onClick = (id) => {
    dispatch(goToPost(id));
  };

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => onClick(post.id)}>
            {post.title}
          </li>
        ))}
      </ul>
      <Link to="/write">Write</Link>
    </>
  );
}

export default Posts;
