/* eslint-disable max-len */

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Details = () => {
  const [details, setDetails] = useState({}); // state variable w/ empty object
  const { pokemonName } = useParams(); // using object deconstruction acces 'pokemonName' from 'useParams()
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1); // make it navigate one page back in the history
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [pokemonName]);
  return (
    <div>
      <button type="button" onClick={onBackButtonClick}>
        Go back
      </button>
      <h2>{details.name}</h2>
      <img
        alt="img"
        src={details.sprites ? details.sprites.other['official-artwork'].front_default : ''} />
    </div>
  );
};
