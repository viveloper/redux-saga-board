import { useState } from 'react';

function useInputs(initialState) {
  const [inputs, setInputs] = useState(initialState);

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return [inputs, onChange];
}

export default useInputs;
