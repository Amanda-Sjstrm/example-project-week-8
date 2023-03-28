import React from 'react';
import { Link } from 'react-router-dom';

export const List = ({ pokemons }) => {
  // 'pokemons' = destructured prop
  return (
    <section className="list">
      {/* map through the pokemons variable creating a <Link> on each iteration.
        Set the <Link> property key to the name of a single element,
        the property to to `{/details/${pokemon.name}` of a single element. */}
      {pokemons.map((pokemon) => {
        return (
          <Link key={pokemon.name} to={`/details/${pokemon.name}`} className="list-element">
            {pokemon.name}
          </Link>
        );
      })}
    </section>
  );
};
