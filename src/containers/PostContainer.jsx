import React, { useEffect } from 'react';
import Post from '../components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../modules/posts';

function PostContainer({ postId }) {
  const dispatch = useDispatch();
  const { loading, data: post, error } = useSelector((state) =>
    state.posts.post[postId]
      ? state.posts.post[postId]
      : { loading: false, data: null, error: null }
  );

  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error!</div>;
  if (!post) return null;

  return <Post post={post} />;
}

export default PostContainer;
