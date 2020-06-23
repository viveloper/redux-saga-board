import React, { useEffect } from 'react';
import Posts from '../components/Posts';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../modules/posts';

function PostsContainer() {
  const { loading, data: posts, error } = useSelector(
    (state) => state.posts.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error!</div>;
  if (!posts) return null;

  return <Posts posts={posts} />;
}

export default PostsContainer;
