import React from 'react';
import useInputs from '../hooks/useInputs';
import { createPost } from '../modules/posts';
import { useDispatch } from 'react-redux';

function Write() {
  const [inputs, onChange] = useInputs({
    title: '',
    author: '',
    content: '',
  });

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: inputs.title,
      author: inputs.author,
      content: inputs.content,
    };
    dispatch(createPost(post));
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={inputs.title}
          onChange={onChange}
        />
      </div>
      <div>
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={inputs.author}
          onChange={onChange}
        />
      </div>
      <div>
        <textarea
          name="content"
          cols="30"
          rows="10"
          value={inputs.content}
          onChange={onChange}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Write;
