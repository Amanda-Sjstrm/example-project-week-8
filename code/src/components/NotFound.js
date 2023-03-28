/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/'); // a function called onHomeButtonClick which will call the navigate with the argument '/'
  };

  return (
    <div>
      <p>Sorry Pokemon Master, no such page</p>
      <button type="button" onClick={onHomeButtonClick}>
        Return to Home Page
      </button>
    </div>
  );
};
