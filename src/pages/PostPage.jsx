import React from 'react';

function PostPage({ match }) {
  const id = match.params.id;
  return <div>PostPage {id}</div>;
}

export default PostPage;
