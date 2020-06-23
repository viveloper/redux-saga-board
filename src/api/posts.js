import axios from 'axios';

export const getPosts = async () => {
  const response = await axios.get('/posts');
  return response.data;
};

export const getPost = async (id) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};

export const createPost = async (post) => {
  const response = await axios.post('/posts', post);
  return response.data;
};

export const updatePost = async (id, post) => {
  const response = await axios.put(`/posts/${id}`, post);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await axios.delete(`/posts/${id}`);
  return response.data;
};
