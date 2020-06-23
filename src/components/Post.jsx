import React from 'react';
import { Link } from 'react-router-dom';

function Post({ post }) {
  const { author, title, content } = post;
  return (
    <div>
      <Link to="/">Go Home</Link>
      <div>
        <span>Title : {title}</span>
      </div>
      <div>
        <small>Author : {author}</small>
      </div>
      <p>{content}</p>
    </div>
  );
}

export default Post;
